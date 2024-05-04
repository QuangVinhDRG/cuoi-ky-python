FROM mysql
ENV MYSQL_ROOT_PASSWORD 1234
ADD ./schema.sql /docker-entrypoint-initdb.d
EXPOSE 3306