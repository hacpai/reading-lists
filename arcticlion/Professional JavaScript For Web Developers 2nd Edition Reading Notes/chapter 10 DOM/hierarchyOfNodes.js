//This is HTML
<html>
    <head>
        <title>Sample Page</title>
    </head>
    <body>
        <p>Hello World!</p>    
    </body>
</html>
//这是上面Html代码的层次节点
+------------------+
|Document          |
+-----+------------+
      |    +-----------------+
      +++++|Element html     |
           +----+------------+
                |    +---------------+
                |++++|Element head   |
                |    +--+------------+
                |       |    +----------------+
                |       +++++|Element title   |
                |            +----+-----------+
                |                 |       +-----------------+
                |                 ++++++++|Text Sample Page |
                |                         +-----------------+
                |    +---------------+
                +++++|Element body   |
                     +--+------------+
                        |    +----------------+
                        +++++|Element P       |
                             +-----+----------+
                                   |      +-----------------+
                                   +++++++|Text Hello World!|
                                          +-----------------+
