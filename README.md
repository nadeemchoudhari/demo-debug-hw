
# Technical Challenge
## 1-helm-debug

This is a simple application deployment in kubernetes, it's configured to work.

Please find the base code under [1-helm-debug]](1-helm-debug)

```
helm upgrade -n interview --install --values 1-helm-debug/helm/values.yaml interview-task 1-helm-debug/helm/
```

The application is working by taking value of env variable `WORLD` to display the output on webpage.

### Questions

1. This deployment is currently not working properly, can you figure out why.
2. When querying different endpoints it should show each of the different services you created on the previous step:
   - `http://<address>/de` should show "Hello Freund"
   - `http://<address>/es` should show "Hello Amigo"
   - `http://<address>/fr` should show "Hello Ami"

3. Deploy this applications to the istio service mesh 
   1. Expose this service to outside of the cluster by istio gateway ingress controller.
   2. When query `http://<address>/eu` should load balancing round robind shows belows output
      1. "Hello Freund"
      2. "Hello Amigo"
      3. "Hello Ami"

## Solution : 

The Solution for this challenge is at https://github.com/nadeemchoudhari/demo-argocd-helm.git master branch.

### To fix this: 

    1. docker image is rebuild to update index.js file. 
    2. Made some corrections in helm chart configmap
    3. Added Virtual service router for /de, /fr, /es matching uri. 
    4. Istio service mesh enabled on interview namespace and istio gateway configure to listen on port 80.
     
         pod target port : 8000
         service port: 80
         gateway port : 80


#### app is deployed using helm integrated ArgoCD 

 

   
   
     
