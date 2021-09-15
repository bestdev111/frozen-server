FROM mysql:5.7

COPY *.sql /docker-entrypoint-initdb.d/
COPY import.sh /docker-entrypoint-initdb.d/import.sh

RUN chmod +x /docker-entrypoint-initdb.d/import.sh
