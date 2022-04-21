<h1 align="center">
  <img src="https://github.com/kevinbevers/ip-s6-itersocium/blob/main/docs/images/logo.png" alt="IterSocium" width="250">
  <br>
  IterSocium
  <br>
</h1>
<p>
Codebase for a fullstack application that enables you to plan your travels and share them.<br /><br />
Developed to proof the learning outcomes of semester 6 IT & Software Engineering @<br /> <a href="https://fontys.nl/Over-Fontys/Fontys-Hogeschool-ICT.htm">Fontys university of applied sciences.</a>
</p><br /><br />

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#development">Development</a> •
  <a href="#cluster-setup">Cluster Setup</a> •
  <a href="#how-to-use">Links</a>
</p>

## Tech Stack

<a href="https://reactnative.dev/"><img src="https://linku.nl/app/uploads/2020/07/react-native-logo-1.png" width="100"/></a>
  - using [Expo](https://expo.dev/) for building
  - using [RNUILIB](https://wix.github.io/react-native-ui-lib/) for styling
  - using [URQL](https://formidable.com/open-source/urql/) GraphQL client
 
<a href="https://hasura.io/"><img src="https://hasura.io/brand-assets/hasura-logo-primary-dark.png" width="100"/></a>
  - [GraphQL](https://graphql.org/) Engine
    - Horizontal scaling
    - Hosted in a kubernetes cluster

<a href="https://yugabyte.com/"><img src="https://upload.wikimedia.org/wikipedia/en/d/d2/YugabyteLogo.png" width="100"/></a>
  - Clustered database with [PostgreSQL](https://www.postgresql.org/) interface
    - Horizontal scaling
    - Automatic sharding
    - Hosted in a kubernetes cluster

## Development
To run the back-end for development purposes use the following command:

```bash
$ docker compose up -d
```

To access the hasura console (used to tweak tables, auto generates migration files) do the following:

```bash
$ cd hasura
$ hasura console
```

This will open the console and save migrations files to the hasura folder on changes.

### Running the React Native app
To run the react-native app use the following commands:
```bash
$ cd IterSocium
$ npm run start
```

## Cluster Setup
Add charts repository
To add the YugabyteDB charts repository, run the following command:

```bash
$ helm repo add yugabytedb https://charts.yugabyte.com
```

Fetch updates from the repository
Make sure that you have the latest updates to the repository by running the following command:

```bash
$ helm repo update
```

Validate the chart version

```bash
$ helm search repo yugabytedb/yugabyte
```

Expect output similar to the following:

```bash
NAME                    CHART VERSION   APP VERSION     DESCRIPTION
yugabytedb/yugabyte     2.13.0           2.13.0.1-b2    YugabyteDB is the high-performance distributed ...
Install YugabyteDB
Install YugabyteDB in the Kubernetes cluster using the commands desribed in the following sections.
```

### On multi-node Kubernetes
Create a namespace and then install YugabyteDB:

```bash
$ kubectl create namespace itersocium
$ helm install itersocium yugabytedb/yugabyte --namespace itersocium --wait
```

### On Minikube
First start the cluster with the following command:
 ```bash
 $ minikube start --cpus 4 --memory 5120
 ```

If you are running in a resource-constrained environment or a local environment, such as Minikube, you have to change the default resource requirements by using the following command:

Create a itersocium namespace:

```bash
$ kubectl create namespace itersocium
$ helm install itersocium yugabytedb/yugabyte \
--set resource.master.requests.cpu=0.5,resource.master.requests.memory=0.5Gi,\
resource.tserver.requests.cpu=0.5,resource.tserver.requests.memory=0.5Gi --namespace itersocium
```

### Deploy hasura-graphql-engine to cluster
Use the deployment.yaml from the k8s folder to deploy hasura to the cluster.

```bash
kubectl apply -f ./k8s -n itersocium
```

## Links

- [Proof of architecture scalability](https://github.com/yugabyte/yugabyte-graphql-apps/blob/master/graphql-subscription-with-yugabytedb/1M_subscriptions.md)

