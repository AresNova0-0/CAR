/* #define _POSIX_C_SOURCE 200809L
#include <arpa/inet.h>
#include <errno.h>
#include <fcntl.h>
#include <netinet/in.h>
#include <pthread.h>
#include <signal.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/socket.h>
#include <sys/stat.h>
#include <time.h>
#include <unistd.h>
#define ROOT "public"
#define BUF 8192
static volatile sig_atomic_t running=1;
static const char* mime(const char*p){const char*e=strrchr(p,'.');if(!e)return"application/octet-stream";if(!strcmp(e,".html"))return"text/html; charset=utf-8";if(!strcmp(e,".css"))return"text/css; charset=utf-8";if(!strcmp(e,".js"))return"application/javascript; charset=utf-8";if(!strcmp(e,".jpg")||!strcmp(e,".jpeg"))return"image/jpeg";if(!strcmp(e,".png"))return"image/png";if(!strcmp(e,".svg"))return"image/svg+xml";if(!strcmp(e,".webp"))return"image/webp";return"application/octet-stream";}
static void logreq(const char*ip,const char*m,const char*p,int code){time_t t=time(NULL);struct tm tm;localtime_r(&t,&tm);char ts[32];strftime(ts,sizeof ts,"%Y-%m-%d %H:%M:%S",&tm);printf("[%s] %s %s %s -> %d\n",ts,ip,m,p,code);fflush(stdout);}
static void reply(int c,int code,const char*s,const char*b){char h[512];int n=strlen(b);snprintf(h,sizeof h,"HTTP/1.1 %d %s\r\nContent-Type:text/html; charset=utf-8\r\nContent-Length:%d\r\nConnection:close\r\n\r\n",code,s,n);send(c,h,strlen(h),0);send(c,b,n,0);}
static void*client(void*arg){int c=*(int*)arg;free(arg);char b[BUF+1]={0};struct sockaddr_in peer;socklen_t pl=sizeof peer;getpeername(c,(struct sockaddr*)&peer,&pl);char ip[INET_ADDRSTRLEN];inet_ntop(AF_INET,&peer.sin_addr,ip,sizeof ip);if(recv(c,b,BUF,0)<=0){close(c);return NULL;}char m[16]={0},u[2048]={0};sscanf(b,"%15s %2047s",m,u);char*q=strchr(u,'?');if(q)*q=0;if(strcmp(m,"GET")){reply(c,405,"Method Not Allowed","<h1>405 Method Not Allowed</h1>");logreq(ip,m,u,405);close(c);return NULL;}const char*p=!strcmp(u,"/")?"/index.html":u;if(strstr(p,"..")){reply(c,403,"Forbidden","<h1>403 Forbidden</h1>");logreq(ip,m,p,403);close(c);return NULL;}char f[4096];snprintf(f,sizeof f,"%s%s",ROOT,p);int fd=open(f,O_RDONLY);if(fd<0){reply(c,404,"Not Found","<h1>404 Not Found</h1>");logreq(ip,m,p,404);close(c);return NULL;}struct stat st;fstat(fd,&st);char h[512];snprintf(h,sizeof h,"HTTP/1.1 200 OK\r\nContent-Type:%s\r\nContent-Length:%lld\r\nConnection:close\r\n\r\n",mime(f),(long long)st.st_size);send(c,h,strlen(h),0);char d[BUF];ssize_t n;while((n=read(fd,d,sizeof d))>0){ssize_t o=0;while(o<n){ssize_t s=send(c,d+o,n-o,0);if(s<=0)break;o+=s;}}close(fd);logreq(ip,m,p,200);close(c);return NULL;}
static void stop(int s){(void)s;running=0;}
int main(int argc,char**argv){int port=argc>1?atoi(argv[1]):9000;signal(SIGINT,stop);signal(SIGTERM,stop);int s=socket(AF_INET,SOCK_STREAM,0);if(s<0){perror("socket");return 1;}int yes=1;setsockopt(s,SOL_SOCKET,SO_REUSEADDR,&yes,sizeof yes);struct sockaddr_in a={0};a.sin_family=AF_INET;a.sin_addr.s_addr=htonl(INADDR_ANY);a.sin_port=htons(port);if(bind(s,(struct sockaddr*)&a,sizeof a)<0){perror("bind");return 1;}if(listen(s,64)<0){perror("listen");return 1;}printf("LuxeCar C Web Server\nLocal: http://localhost:%d\nLAN:   http://<IP-MAY-SERVER>:%d\nRoot:  ./%s\n",port,port,ROOT);while(running){int*c=malloc(sizeof(int));if(!c)continue;*c=accept(s,NULL,NULL);if(*c<0){free(c);if(errno==EINTR)continue;break;}pthread_t t;if(pthread_create(&t,NULL,client,c)==0)pthread_detach(t);else{close(*c);free(c);}}close(s);return 0;}
*/
