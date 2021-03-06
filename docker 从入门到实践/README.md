## Reading Notes

### 利用 Dockerfile 创建镜像

新建一个目录和一个 Dockerfile

```
$ mkdir sinatra
$ cd sinatra
$ touch Dockerfile
```

Dockerfile 中每一条指令都创建镜像的一层，例如：

```
# This is a comment
FROM ubuntu:14.04
MAINTAINER Docker Newbee <newbee@docker.com>
RUN apt-get -qq update
RUN apt-get -qqy install ruby ruby-dev
RUN gem install sinatra
```

编写完成 Dockerfile 后可以使用 `docker build` 来生成镜像。

```
$ sudo docker build -t="ouruser/sinatra:v2" .
```

其中 -t 标记来添加 tag，指定新的镜像的用户信息。 “.” 是 Dockerfile 所在的路径（当前目录），也可以替换为一个具体的 Dockerfile 的路径。

此外，还可以利用 ADD 命令复制本地文件到镜像；用 EXPOSE 命令来向外部开放端口；用 CMD 命令来描述容器启动后运行的程序等。例如

```
# put my local web site in myApp folder to /var/www
ADD myApp /var/www
# expose httpd port
EXPOSE 80
# the command to run
CMD ["/usr/sbin/apachectl", "-D", "FOREGROUND"]
```

### 从本地文件系统导入

要从本地文件系统导入一个镜像，可以使用 openvz（容器虚拟化的先锋技术）的模板来创建： openvz 的模板下载地址为 [templates](http://openvz.org/Download/templates/precreated) 。

比如，先下载了一个 ubuntu-14.04 的镜像，之后使用以下命令导入：

    sudo cat ubuntu-14.04-x86_64-minimal.tar.gz  |docker import - ubuntu:14.04

### 存出镜像

```
$ sudo docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             VIRTUAL SIZE
ubuntu              14.04               c4ff7513909d        5 weeks ago         225.4 MB
...
$sudo docker save -o ubuntu_14.04.tar ubuntu:14.04
```

### 载入镜像

    $ sudo docker load --input ubuntu_14.04.tar

### 进入容器

```
$ sudo docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
243c32535da7        ubuntu:latest       "/bin/bash"         18 seconds ago      Up 17 seconds                           nostalgic_hypatia
$sudo docker attach nostalgic_hypatia
```

Or

```
$ sudo docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
243c32535da7        ubuntu:latest       "/bin/bash"         18 seconds ago      Up 17 seconds                           nostalgic_hypatia
$ PID=$(docker-pid 243c32535da7)
10981
$ sudo nsenter --target 10981 --mount --uts --ipc --net --pid
root@243c32535da7:/#
```

Or

下载 .bashrc_docker，并将内容放到 .bashrc 中。

```
$ wget -P ~ https://github.com/yeasy/docker_practice/raw/master/_local/.bashrc_docker;
$ echo "[ -f ~/.bashrc_docker ] && . ~/.bashrc_docker" >> ~/.bashrc; source ~/.bashrc
```

这个文件中定义了很多方便使用 Docker 的命令，例如 `docker-pid` 可以获取某个容器的 PID；而 `docker-enter` 可以进入容器或直接在容器内执行命令。

### 导出容器

```
$ sudo docker ps -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                    PORTS               NAMES
7691a814370e        ubuntu:14.04        "/bin/bash"         36 hours ago        Exited (0) 21 hours ago                       test
$ sudo docker export 7691a814370e > ubuntu.tar
```

### 导入容器快照

```
$ cat ubuntu.tar | sudo docker import - test/buntu:v1.0
$ sudo docker images
REPOSITORY          TAG                 IMAGE ID            CREATED              VIRTUAL SIZE
test/ubuntu         v1.0                9d37a6082e97        About a minute ago   171.3 MB
```

此外，也可以通过指定 URL 或者某个目录来导入，例如

    $sudo docker import http://example.com/exampleimage.tgz example/imagerepo

### 创建一个数据卷

下面创建一个 web 容器，并加载一个数据卷到容器的 `/webapp` 目录。

    $ sudo docker run -d -P --name web -v /webapp training/webapp python app.py

### 挂载一个主机目录作为数据卷

    $ sudo docker run -d -P --name web -v /src/webapp:/opt/webapp training/webapp python app.py

Docker 挂载数据卷的默认权限是读写，用户也可以通过 :ro 指定为只读。

    $ sudo docker run -d -P --name web -v /src/webapp:/opt/webapp:ro training/webapp python app.py

### 创建一个命名的数据卷容器 dbdata

    $ sudo docker create -v /dbdata --name dbdata training/postgres

然后，在其他容器中使用 --volumes-from 来挂载 dbdata 容器中的数据卷。
    $ sudo docker run -d --volumes-from dbdata --name db1 training/postgres
    $ sudo docker run -d --volumes-from dbdata --name db2 training/postgres

如果删除了挂载的容器（包括 dbdata、db1 和 db2），数据卷并不会被自动删除。如果要删除一个数据卷，必须在删除最后一个还挂载着它的容器时使用 docker rm -v 命令来指定同时删除关联的容器.

### 利用数据卷容器备份

首先使用 `--volumes-from` 标记来创建一个加载 dbdata 容器卷的容器，并从本地主机挂载当前到容器的 /backup 目录。

    $ sudo docker run --volumes-from dbdata -v $(pwd):/backup ubuntu tar cvf /backup/backup.tar /dbdata

### 恢复数据到容器

首先创建一个带有数据卷的容器 dbdata2。

    $ docker run -v /dbdata --name dbdata2 ubuntu /bin/bash

然后创建另一个容器，挂载 dbdata2 的容器，并使用 untar 解压备份文件到挂载的容器卷中。

    $ sudo docker run --volumes-from dbdata2 -v $(pwd):/backup busybox tar xvf /backup/backup.tar

### 映射指定端口

    $ sudo docker run -d -p 5000:5000 training/webapp python app.py

### 自定义容器命名

    $ sudo docker run --rm -P --name web training/webapp python app.py

> `--rm` 标记表示容器在终止后会立刻删除, 不能与 `-d` 参数一同使用

### 容器互联

    $ sudo docker run -d -P --name web --link db:db training/webapp python app.py

> --link name:alias 其中 name 是要连接的容器的名称，alias 是这个链连接的别名

### 查看容器公开连接信息

```
$ sudo docker run --rm --name web2 --link db:db training/webapp env
. . .
DB_NAME=/web2/db
DB_PORT=tcp://172.17.0.5:5432
DB_PORT_5000_TCP=tcp://172.17.0.5:5432
DB_PORT_5000_TCP_PROTO=tcp
DB_PORT_5000_TCP_PORT=5432
DB_PORT_5000_TCP_ADDR=172.17.0.5
. . .
```

Docker 还添加 host 信息到父容器的 /etc/hosts 的文件。下面是父容器 web 的 hosts 文件

```
$ sudo docker run -t -i --rm --link db:db training/webapp /bin/bash
root@aed84ee21bde:/opt/webapp# cat /etc/hosts
172.17.0.7  aed84ee21bde
. . .
172.17.0.5  db
```

这里有 2 个 hosts，第一个是 web 容器，web 容器用 id 作为他的主机名，第二个是 db 容器的 ip 和主机名。 

### 配置 DNS

默认情况下，容器挂载主机的 `/etc/resolv.conf` 文件，用主机的 DNS

在 `docker run` 执行时添加 `--dns=IP_ADDRESS` 添加 DNS 服务器到容器的 /etc/resolv.conf 中.

### 查看系统转发支持

```
$sysctl net.ipv4.ip_forward
net.ipv4.ip_forward = 1
```

如果为 0，说明没有开启转发，则需要手动打开。

    $sysctl -w net.ipv4.ip_forward=1

### 容器之间的访问

默认情况下，容器之间是允许网络互联的。

为了安全考虑，可以在 `/etc/default/docker` 文件中配置 `DOCKER_OPTS=--icc=false` 来禁止它。

### 访问指定端口

查看系统的 `iptables` 规则

```
$ sudo iptables -nL
...
Chain FORWARD (policy ACCEPT)
target     prot opt source               destination
DROP       all  --  0.0.0.0/0            0.0.0.0/0
...
```

`docker run` 时使用 `--link=CONTAINER_NAME:ALIAS` 会在 `iptable` 中为两个容器分别添加一条 `ACCEPT` 规则。

```
 sudo iptables -nL
 ...
 Chain FORWARD (policy ACCEPT)
 target     prot opt source               destination
 ACCEPT     tcp  --  172.17.0.2           172.17.0.3           tcp spt:80
 ACCEPT     tcp  --  172.17.0.3           172.17.0.2           tcp dpt:80
 DROP       all  --  0.0.0.0/0            0.0.0.0/0
 ```

### 容器访问外部网络

默认情况下，容器可以主动访问到外部网络。

容器到外部网络的连接，源地址都会被 NAT 成本地系统网卡发出的。

### 外部访问容器实现

`docker run` 通过 `-p` 或 `-P` 参数来启用。

Docker 配置文件 `/etc/default/docker` 中指定 `DOCKER_OPTS="--ip=IP_ADDRESS"`, 可以永久绑定某个固定的 ip 地址。

### 配置 docker0 网桥

* `--bip=CIDR` --IP 地址加掩码格式，例如 192.168.1.5/24
* `--mtu=BYTES` --覆盖默认的 Docker mtu 配置

`brctl show` 可以查看网桥和端口连接信息。

```
$ sudo brctl show
bridge name     bridge id               STP enabled     interfaces
docker0         8000.3a1d7362b4ee       no              veth65f9
                                             vethdda6
```

### 自定义网桥

如果服务已经运行，那需要先停止服务，并删除旧的网桥。

```
$ sudo service docker stop
$ sudo ip link set dev docker0 down
$ sudo brctl delbr docker0
```
然后创建一个网桥 bridge0。

```
$ sudo brctl addbr bridge0
$ sudo ip addr add 192.168.5.1/24 dev bridge0
$ sudo ip link set dev bridge0 up
```
查看确认网桥创建并启动。

```
$ ip addr show bridge0
4: bridge0: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state UP group default
    link/ether 66:38:d0:0d:76:18 brd ff:ff:ff:ff:ff:ff
    inet 192.168.5.1/24 scope global bridge0
       valid_lft forever preferred_lft forever
```
配置 Docker 服务，默认桥接到创建的网桥上。

```
$ echo 'DOCKER_OPTS="-b=bridge0"' >> /etc/default/docker
$ sudo service docker start
```

可以继续用 `brctl show` 命令查看桥接的信息。另外，在容器中可以使用 `ip addr` 和 `ip route` 命令来查看 IP 地址配置和路由信息。


