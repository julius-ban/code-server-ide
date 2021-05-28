FROM node:10.16.0

# nodejs for vscode plugin
RUN curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh -o install_nvm.sh
RUN sh install_nvm.sh
ENV NVM_DIR="/root/.nvm"

RUN chmod o+x /root/.nvm/nvm.sh
RUN /bin/bash -c "source /root/.nvm/nvm.sh && nvm install v12.0.0"
ENV PATH="/root/.nvm/versions/node/v12.0.0/bin/:${PATH}"

# nodejs
RUN mkdir -p /home/danawa/works
WORKDIR /home/danawa/works
RUN wget https://github.com/heroku/node-js-sample/archive/refs/heads/master.zip
RUN unzip master.zip
RUN rm master.zip

# code-server
WORKDIR /home/danawa/.code-server
RUN wget https://github.com/cdr/code-server/releases/download/1.939-vsc1.33.1/code-server1.939-vsc1.33.1-linux-x64.tar.gz
RUN tar xzf code-server1.939-vsc1.33.1-linux-x64.tar.gz -C ./ --strip-components 1

WORKDIR /home/danawa

# -p 10000 => 지정할 컨테이너 번호 
CMD /home/danawa/.code-server/code-server --allow-http --no-auth -p 10000