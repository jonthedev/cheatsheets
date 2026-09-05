# 🧠 Kubernetes Local Setup Overview (Minikube + Docker + OpenLens)

## Summary

- Docker: Container runtime used by Minikube
- Minikube: Runs a local Kubernetes cluster
- kubectl: CLI to interact with Kubernetes
- OpenLens: GUI to manage and visualize Kubernetes

## How it works

- We need Docker Desktop as our container runtime. It lets Minikube create the containers that make up a Kubernetes cluster, and allows us to run and build container images locally.

- We use Minikube to spin up a local Kubernetes cluster. It gives us an easy way to work with Kubernetes locally, and also sets up kubectl so we can interact with the cluster via command line.

- OpenLens is a GUI tool that visually shows our Kubernetes clusters. It connects to the clusters via our kubeconfig and lets us manage them without using the terminal.

## 🧩 How It All Works Together

                ┌────────────────────┐
                │     OpenLens       │
                │  (GUI for K8s)     │
                └────────┬───────────┘
                         │
               Reads ~/.kube/config
                         │
                ┌────────▼────────┐
                │     kubectl     │
                │  (K8s CLI tool) │
                └────────┬────────┘
                         │
             Talks to Minikube Cluster API
                         │
                ┌────────▼─────────────┐
                │     Minikube         │
                │  (K8s Cluster in a   │
                │   Docker container)  │
                └────────┬─────────────┘
                         │
       Spins up containers using Docker Desktop
                         │
                ┌────────▼────────┐
                │   Docker Engine │
                └─────────────────┘

## 🧱 Main Components

### 1. **Docker Desktop**

- Acts as the **container runtime** on macOS.
- Provides an environment to run containers and images.
- In this setup, it's **used as the driver** by Minikube.
- Not responsible for Kubernetes itself, but powers it behind the scenes.

---

### 2. **Minikube**

- Tool to run a **lightweight local Kubernetes cluster**.
- Uses Docker as the driver to **spin up a VM-like container** running Kubernetes.
- Sets up `kubectl` to interact with this local cluster.

```bash
minikube start --driver=docker
```

- Manages the lifecycle of the Kubernetes cluster:
  - Start, stop, delete
  - Load images
  - Enable addons

---

### 3. **OpenLens**

- A visual Kubernetes dashboard and IDE.
- Reads from the local kubeconfig (~/.kube/config).
- Lets you:
  - Browse clusters
  - Inspect namespaces, pods, deployments, etc.
  - View logs and metrics
  - Apply YAML manifests visually

---
