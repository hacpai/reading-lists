## Installation

### Ubuntu 14.04

    wget -qO- https://get.docker.com/ | sh

    ps aux | grep docker

If prompt 

    root     16731  0.0  0.1  11756   932 pts/3    S+   19:35   0:00 grep --color=auto docker

you should enter

    service docker start

    docker run hello-world

This command downloads a test image and runs it in a container.

## User Guide

### Getting Started with Docker Hub

### Dockerizing Applications: A "Hello world"

```
$ sudo docker run ubuntu:14.04 /bin/echo 'Hello world'
Hello world
```

```
$ sudo docker run -t -i ubuntu:14.04 /bin/bash
root@af8bae53bdd3:/#
```

```
$ sudo docker run -d ubuntu:14.04 /bin/sh -c "while true; do echo hello world; sleep 1; done"
1e5535038e285177d5214659a068137486f96ee5c2e85a4ac52dc83f2ebe4147
```

```
$ sudo docker ps
CONTAINER ID  IMAGE         COMMAND               CREATED        STATUS       PORTS NAMES
1e5535038e28  ubuntu:14.04  /bin/sh -c 'while tr  2 minutes ago  Up 1 minute        insane_babbage
```

```
$ sudo docker logs insane_babbage
hello world
hello world
hello world
. . .
```

```
$ sudo docker stop insane_babbage
insane_babbage
```

```
$ sudo docker ps
CONTAINER ID  IMAGE         COMMAND               CREATED        STATUS       PORTS NAMES
```

### Working with Containers

* `docker ps` - Lists containers.
* `docker login` - Shows us the standard output of a container.
* `docker stop` - Stops running containers.

```
$ sudo docker version
Client version: 1.5.0
Client API version: 1.17
Go version (client): go1.4.1
Git commit (client): a8a31ef
OS/Arch (client): linux/amd64
Server version: 1.5.0
Server API version: 1.17
Go version (server): go1.4.1
Git commit (server): a8a31ef
```

```
$ sudo docker
Commands:
attach    Attach to a running container
build     Build an image from a Dockerfile
commit    Create a new image from a container's changes
. . .
```

```
$ sudo docker attach --help
Usage: docker attach [OPTIONS] CONTAINER

Attach to a running container

  --no-stdin=false: Do not attach stdin
  --sig-proxy=true: Proxify all received signal to the process (non-TTY mode only)
```

> Note: You can see a full list of Docker's commands [here](https://docs.docker.com/reference/commandline/cli/).

#### Running a Web Application in Docker

```
$ sudo docker run -d -P training/webapp python app.py
```

> `-d` 在后台运行容器

#### Viewing our Web APplication Container

```
$ sudo docker ps -l
CONTAINER ID  IMAGE                   COMMAND       CREATED        STATUS        PORTS                    NAMES
bc533791f3f5  training/webapp:latest  python app.py 5 seconds ago  Up 2 seconds  0.0.0.0:49155->5000/tcp  nostalgic_morse
```

> `docker ps -a` 可用来查看曾经停止的容器

```
$ sudo docker run -d -p 5000:5000 training/webapp python app.py
```
手动端口映射

#### A Network Port Shortcut

```
$ sudo docker port nostalgic_morse 5000
0.0.0.0:49155
```

#### Viewing the Web Application's Logs

```
$ sudo docker logs -f nostalgic_morse
* Running on http://0.0.0.0:5000/
10.0.2.2 - - [23/May/2014 20:16:31] "GET / HTTP/1.1" 200 -
10.0.2.2 - - [23/May/2014 20:16:31] "GET /favicon.ico HTTP/1.1" 404 -
```

#### Looking at our Web Application Container's processes

```
$ sudo docker top nostalgic_morse
PID                 USER                COMMAND
854                 root                python app.py
```

#### Inspecting our Web Application Container

```
$ sudo docker inspect nostalgic_morse
[{
    "ID": "bc533791f3f500b280a9626688bc79e342e3ea0d528efe3a86a51ecb28ea20",
    "Created": "2014-05-26T05:52:40.808952951Z",
    "Path": "python",
    "Args": [
    "app.py"
    ],
    "Config": {
       "Hostname": "bc533791f3f5",
       "Domainname": "",
       "User": "",
. . .
```

```
$ sudo docker inspect -f '{{ .NetworkSettings.IPAddress }}' nostalgic_morse
172.17.0.5
```

缩小输出信息，返回指定元素

#### Stopping our Web Application Container

```
$ sudo docker stop nostalgic_morse
nostalgic_morse
```

#### Restarting our Web Application Container

```
$ sudo docker start nostalgic_morse
nostalgic_morse
```

or

```
$ sudo docker restart nostalgic_morse
```

#### Removing our Web Application Container

```
$ sudo docker stop nostalgic_morse
nostalgic_morse
$ sudo docker rm nostalgic_morse
nostalgic_morse
```

### Working with Docker Images

#### Listing images on the host

```
$ sudo docker images
REPOSITORY       TAG      IMAGE ID      CREATED      VIRTUAL SIZE
training/webapp  latest   fc77f57ad303  3 weeks ago  280.5 MB
ubuntu           13.10    5e019ab7bf6d  4 weeks ago  180 MB
ubuntu           saucy    5e019ab7bf6d  4 weeks ago  180 MB
ubuntu           12.04    74fe38d11401  4 weeks ago  209.6 MB
ubuntu           precise  74fe38d11401  4 weeks ago  209.6 MB
ubuntu           12.10    a7cf8ae4e998  4 weeks ago  171.3 MB
ubuntu           quantal  a7cf8ae4e998  4 weeks ago  171.3 MB
ubuntu           14.04    99ec81b80c55  4 weeks ago  266 MB
ubuntu           latest   99ec81b80c55  4 weeks ago  266 MB
ubuntu           trusty   99ec81b80c55  4 weeks ago  266 MB
ubuntu           13.04    316b678ddf48  4 weeks ago  169.4 MB
ubuntu           raring   316b678ddf48  4 weeks ago  169.4 MB
ubuntu           10.04    3db9c44f4520  4 weeks ago  183 MB
ubuntu           lucid    3db9c44f4520  4 weeks ago  183 MB
```

#### Getting a new image

```
$ sudo docker pull centos
Pulling repository centos
b7de3133ff98: Pulling dependent layers
5cc9e91966f7: Pulling fs layer
511136ea3c5a: Download complete
ef52fb1fe610: Download complete
. . .

Status: Downloaded newer image for centos
```

#### Finding images

```
$ sudo docker search sinatra
NAME                                   DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
training/sinatra                       Sinatra training image                          0                    [OK]
marceldegraaf/sinatra                  Sinatra test app                                0
mattwarren/docker-sinatra-demo                                                         0                    [OK]
luisbebop/docker-sinatra-hello-world                                                   0                    [OK]
bmorearty/handson-sinatra              handson-ruby + Sinatra for Hands on with D...   0
subwiz/sinatra                                                                         0
bmorearty/sinatra                                                                      0
. . .
```

#### Pulling our image

    $ sudo docker pull training/sinatra

#### Creating our own images

##### **Updating and committing an image**

```
$ sudo docker run -t -i training/sinatra /bin/bash
root@0b2616b0e5a8:/#
```

```
root@0b2616b0e5a8:/# gem install json
```

```
$ sudo docker commit -m "Added json gem" -a "Kate Smith" \
0b2616b0e5a8 ouruser/sinatra:v2
4f177bd27a9ff0f6dc2a830403925b5360bfe0b93d476f7fc3231110e7f71b1c
```

##### **Building an image from a `Dockerfile`**

Let's create a directory and a Dockerfile first.

```
$ mkdir sinatra
$ cd sinatra
$ touch Dockerfile
```

```
FROM ubuntu:14.04
MAINTAINER Kate Smith <ksmith@example.com>
RUN apt-get update && apt-get install -y ruby ruby-dev
RUN gem install sinatra
```

Now let's take our Dockerfile and use the docker build command to build an image.

```
$ sudo docker build -t ouruser/sinatra:v2 .
```

> `.` indicates a `Dockerfile` in the current directory.

#### Setting tags on an image

```
$ sudo docker tag 5db5f8471261 ouruser/sinatra:devel
```

#### Push an image to Docker Hub

```
$ sudo docker push ouruser/sinatra
The push refers to a repository [ouruser/sinatra] (len: 1)
Sending image list
Pushing repository ouruser/sinatra (3 tags)
. . .
```

#### Remove an image from the host

```
$ sudo docker rmi training/sinatra
Untagged: training/sinatra:latest
Deleted: 5bc342fa0b91cabf65246837015197eecfa24b2213ed6a51a8974ae250fedd8d
Deleted: ed0fffdcdae5eb2c3a55549857a8be7fc8bc4241fb19ad714364cbfd7a56b22f
Deleted: 5c58979d73ae448df5af1d8142436d81116187a7633082650549c52c3a2418f0
```

### Linking Containers Together

#### Connect using Network port mapping

    $ sudo docker run -d -P training/webapp python app.py

```
$ sudo docker ps nostalgic_morse
CONTAINER ID  IMAGE                   COMMAND       CREATED        STATUS        PORTS                    NAMES
bc533791f3f5  training/webapp:latest  python app.py 5 seconds ago  Up 2 seconds  0.0.0.0:49155->5000/tcp  nostalgic_morse
```

You also saw how you can bind a container's ports to a specific port using the -p flag:

    $ sudo docker run -d -p 5000:5000 training/webapp python app.py
   
    $ sudo docker run -d -p 127.0.0.1:5000:5000 training/webapp python app.py

    $ sudo docker run -d -p 127.0.0.1::5000 training/webapp python app.py

    $ sudo docker run -d -p 127.0.0.1:5000:5000/udp training/webapp python app.py

```
$ sudo docker port nostalgic_morse 5000
127.0.0.1:49155
```

#### Connect with the linking system

    $ sudo docker run -d --name db training/postgres

```
$ sudo docker rm -f web
```

Delete the `web` container

```
$ sudo docker run -d -P --name web --link db:db training/webapp python app.py
```
> web 接受  db 的数据

The `--link` flag takes the form:
    --link <name or id>:alias

##### Environment Variables

```
$ sudo docker run --rm --name web2 --link db:db training/webapp env
. . .
DB_NAME=/web2/db
DB_PORT=tcp://172.17.0.5:5432
DB_PORT_5432_TCP=tcp://172.17.0.5:5432
DB_PORT_5432_TCP_PROTO=tcp
DB_PORT_5432_TCP_PORT=5432
DB_PORT_5432_TCP_ADDR=172.17.0.5
. . .
```

##### Updating the /etc/hosts file

```
$ sudo docker run -t -i --rm --link db:db training/webapp /bin/bash
root@aed84ee21bde:/opt/webapp# cat /etc/hosts
172.17.0.7  aed84ee21bde
. . .
172.17.0.5  db
```

### Managing Data in Containers

#### Adding a data volume

    $ sudo docker run -d -P --name web -v /webapp training/webapp python app.py

> Note: You can also use the VOLUME instruction in a Dockerfile to add one or more new volumes to any container created from that image.

#### Mount a Host Directory as a Data Volume

    $ sudo docker run -d -P --name web -v /src/webapp:/opt/webapp training/webapp python app.py

Mount a directory read-only

    $ sudo docker run -d -P --name web -v /src/webapp:/opt/webapp:ro training/webapp python app.py

#### Mount a Host File as a Data Volume

    $ sudo docker run --rm -it -v ~/.bash_history:/.bash_history ubuntu /bin/bash

#### Creating and mounting a Data Volume Container

    $ sudo docker create -v /dbdata --name dbdata training/postgres
    $ sudo docker run -d --volumes-from dbdata --name db1 training/postgres
    $ sudo docker run -d --volumes-from dbdata --name db2 training/postgres

You can also extend the chain by mounting the volume that came from the dbdata container in yet another container via the db1 or db2 containers.

    $ sudo docker run -d --name db3 --volumes-from db1 training/postgres

> To delete the volume from disk, you must explicitly call `docker rm -v` against the last container with a reference to the volume. 

#### Backup, restore, or migrate data volumes

备份 dbdata 到 本地 /backup/backup.tar

    $ sudo docker run --volumes-from dbdata -v $(pwd):/backup ubuntu tar cvf /backup/backup.tar /dbdata

在新的容器中恢复

    $ sudo docker run -v /dbdata --name dbdata2 ubuntu /bin/bash

    $ sudo docker run --volumes-from dbdata2 -v $(pwd):/backup busybox tar xvf /backup/backup.tar

### Working with Docker Hub

    $ docker login
    $ docker search centos
    $ docekr pull centos
    $ docker push yourname/newimage

