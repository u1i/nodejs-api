FROM ubuntu:18.04
MAINTAINER uli.hitzel@gmail.com
EXPOSE 8080
ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Asia/Singapore

RUN apt-get update
RUN apt-get install -y nodejs npm
ENV USER root
RUN npm install -g express-generator
RUN npm install express --save
RUN useradd -ms /bin/bash user
COPY app.js /home/user/app.js
COPY site.html /home/user/index.html
COPY gcp_iam.png /home/user/gcp_iam.png
COPY start.sh /home/user/start.sh
RUN chmod a+x /home/user/start.sh
USER user
WORKDIR /home/user
RUN mkdir public
RUN mv /home/user/index.html /home/user/public/index.html
RUN mv /home/user/gcp_iam.png /home/user/public/gcp_iam.png

CMD ["sh","/home/user/start.sh"]
