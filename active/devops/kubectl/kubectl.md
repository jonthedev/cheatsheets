# kubectl

## Get all nodes

```bash
kubectl get nodes
```

# see current context

```bash
kubectl config current-context
```

# check pods in all namespaces

```bash
kubectl get pods --A
```

# view logs

```bash
kubectl logs <pod-name>
```

# view logs with timestamps

```bash
kubectl logs -f --since=0 <pod-name>
```

# Open an interactive shell into the container

```bash
kubectl exec -it <pod-name> -- /bin/bash
```

# clean up

```bash
kubectl delete pod <pod-name>
```
