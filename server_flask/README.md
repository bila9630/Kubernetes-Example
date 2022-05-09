# Flask Template

## create andrun docker container
```
docker build -t flasktemplate .
docker run --rm -ti -p 5001:5001 flasktemplate
```
<br>--rm: remove, container will be automatically removed
<br>-ti: terminal active
<br>-p: port mounting host:container
<br>flasktemplate: container name
<br>access would be at http://localhost:5001/

## run docker compose
```
docker-compose up
```
access is at http://localhost:5001/
## set up the application locally:

install:
```
    pip install -r requirements.txt
```
run:
```
    python app.py
```
