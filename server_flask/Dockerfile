# init a base image
FROM python:3.9-slim

# updgrade pip
RUN pip install --upgrade pip
# upgrade apt-get
RUN apt-get upgrade

# define working directory and install dependencies
COPY requirements.txt /app/requirements.txt
WORKDIR /app
RUN pip install -r requirements.txt

# opy the content into the working dir
COPY . /app/
# get all updates image
RUN apt-get -y update

# define the command to start the container
CMD [ "python", "app.py" ]