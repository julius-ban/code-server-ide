FROM openjdk:11

# GRADLE
RUN mkdir /works
WORKDIR /works

RUN apt-get update
RUN apt-get install -y curl wget gnupg less lsof net-tools git apt-utils -y
RUN apt-get install -y build-essential libssl-dev curl git-core
RUN apt-get install -y emacs

RUN wget https://downloads.gradle.org/distributions/gradle-5.4.1-bin.zip
RUN unzip gradle-5.4.1-bin.zip
ENV PATH="/works/gradle-5.4.1/bin:${PATH}"

# code-server
RUN wget https://github.com/cdr/code-server/releases/download/1.939-vsc1.33.1/code-server1.939-vsc1.33.1-linux-x64.tar.gz
RUN tar xzf code-server1.939-vsc1.33.1-linux-x64.tar.gz -C ./ --strip-components 1
CMD ./code-server --allow-http --no-auth