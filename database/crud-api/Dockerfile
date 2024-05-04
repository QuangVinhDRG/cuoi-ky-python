FROM python:3.8

WORKDIR /database-crud-api

COPY requirements.txt /database-crud-api/requirements.txt

RUN pip install -r requirements.txt

COPY . /database-crud-api

CMD python ./index.py