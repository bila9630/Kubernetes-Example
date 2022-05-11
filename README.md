# Kubernetes-Example

An example how to use Docker Compose

React client runs on [port 31110](http://localhost:31110/), Flask on [31111](http://localhost:31111/) and Express on [31112](http://localhost:31112/). When you send a request, the result will be printed on the console.

In the folder Documentation is a [short Kubernetes glossary](/Documentation/Duc%E2%80%99s%20Kubernetes%20glossary.md) where most kubernetes ressources are explained.

## requirements
Docker and Kubernetes, I recommend to use Docker Desktop.

## how to start
Apply all k8s instances
```
kubectl apply -f k8s/
```

Check if k8s ressources are running
```
kubectl get all
```