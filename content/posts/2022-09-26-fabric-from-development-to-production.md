---
title: Hyperledger Fabric Deployment — How We Aced it from Testing to Production
date: '2022-09-26'
author: Bhaskar Ram
categories:
  - fabric
  - hyperledger
  - blockchain
description: >-
  You’ve set up your Dev environment, developed your chaincode, designed some
  decent looking UIs, and passed all your tests to get everything up & runni...
images:
  - >-
    https://images.unsplash.com/photo-1468779036391-52341f60b55d?w=800&h=450&fit=crop
featured: false
---

You’ve set up your Dev environment, developed your chaincode, designed some decent looking UIs, and passed all your tests to get everything up & running locally. Now what? Is that everything you ever wanted? Of course not! You shouldn’t be satisfied at all. You need to do more. Your next target ought to be to scale the network and stimulate a production-level environment. Added to that, you should also focus on adding multiple orderers, organizations with their own peers and CAs, and try testing it on multiple machines.

![alt](https://miro.medium.com/max/1100/1*Lrt_Rz4Z3RuMQ7SSBATxGw.png)

Although production environments come with countless benefits, there are an array of challenges associated with them, especially if you’re working on a private Blockchain platform like Hyperledger Fabric.

Based on our [real-life](https://www.fabricdeployer.com/) use case on permissioned DLTs like Blockchain, we’ve unveiled some key prerequisites that will help you ace the process of Hyperledger Fabric deployment — from testing to production. So, without further ado, let’s get started!

1. Practical Experience with Docker & Kubernetes

When it comes to deploying a Fabric application to production, you’ve got two major options: Kubernetes and Docker Swarm. In simpler terms, all Hyperledger Fabric components work in Docker containers and can be deployed using either Kubernetes or Docker Swarm. Based on our personal experience in Hyperledger Fabric deployment, we highly recommend using Kubernetes as it is more robust, customizable and has wider industry adoption as compared to Docker Swarm.

However, before getting started with deploying a Fabric application in Kubernetes, you would require the following:

- Docker images, based on which the container is launched;
- YAML-configuration behavior of your container in Kubernetes.

Kubernetes supports auto-scaling and allows you to deploy multi-container applications on the go, which is not the case with Docker. On top of all, when used together, Hyperledger Fabric and Kubernetes offers a powerful, secure platform for processing Blockchain transactions.

Here’s why Kubernetes is the ideal platform for deploying Fabric applications to production (based on what we discovered):

- By deploying the Fabric network on Kubernetes, you can achieve high availability (HA) for your application.
- While Hyperledger Fabric’s bits are developed into container images, Kubernetes assists in orchestrating, scaling, deploying, and managing containers.
- Since Kubernetes supports multi-tenancy, you can execute numerous isolated Fabric instances on your Kubernetes platform, making it enormously easy for you to develop and test Blockchain applications.
- Kubernetes comes with load balancing and fault-tolerance attributes, which can reduce overheads and decrease complexity.
- Long story short, both Hyperledger Fabric and Kubernetes naturally fit and go hand in hand with each other.

2. Exposure to Various Cloud Environments

Earlier, developers typically followed the traditional approach of using a single cloud environment (CI/CD environment) or location to test their application and deploy it to production. However, that’s not the case any longer. Since different industries and networks require different infrastructure configurations, an innovative approach has been evolved which focuses on deploying Blockchain solutions across multiple clouds to maximize flexibility and performance.

That’s why it’s more important than ever for you to test your Hyperledger Fabric solution across multiple cloud environments with different organizations in different geographical locations in order to best meet the diverse needs of your business. This practice resolves the exponentially growing challenge of keeping data available and consistent across multiple cloud environments in different geographies.

We’ve been following this approach for quite some time now (for all our Blockchain projects), and we must say the benefits are countless (which are clearly visible); here are a few of them:

- Data residency and privacy: Deploying the Hyperledger Fabric instance across multiple cloud environments enabled our patrons to store a copy of their ledger in their own infrastructure (behind their firewall), mitigating the risks associated with data residency and privacy.
- Infrastructure without lock-in: It enabled organizations to work with the infrastructure of their choice without being locked into a single vendor.
- Recruitment and consortium growth: Offering flexible deployment options helped us attract many new members to our network or consortium.

3. Advanced Knowledge of Consensus in Hyperledger

While setting up a production environment for Hyperledger Fabric, it’s important to have detailed knowledge of its consensus, which is defined as the full-circle verification of the correctness of all transactions in a proposed block. In simpler terms, the consensus in Hyperledger Fabric is a process in which all the nodes in the network provide a guaranteed ordering of the transactions that need to be committed to the ledger. It can be implemented in several ways, which include by using lottery-based algorithms such as `Proof of Work (PoW)` & `Proof of Elapsed Time (PoET)` and voting-based methods like Paxos and Redundant `Byzantine Fault Tolerance (RBFT)`.

There are three consensus algorithms used in Hyperledger Fabric: Solo, Kafka, and Raft. While Solo involves a single ordering node (not intended for production) and Kafka provides `crash fault-tolerance (CFT)`, Raft is highly recommended for high throughput and low latency.

The consensus in Hyperledger Fabric is divided into three phases: Endorsement, Ordering, and Validation.

- The Endorsement phase is typically driven by policy (m out of n signatures) upon which applicants endorse a transaction.
- The endorsed transaction is passed over to the Ordering phase, which agrees to the order to be committed to the ledger.
- The Validation phase takes a block of ordered transactions and authenticates the exactness of the result.

![alt](https://miro.medium.com/max/1100/1*FYCP8Dc9b6cGxrFLIzLomQ.png)

4. Hands-on Experience with Helm for Kubernetes Package Management

If you’re thinking about using Kubernetes to set up a production environment for your Hyperledger Fabric application, you need to have a strong understanding and experience with Helm. For your understanding, Helm is the package manager for Kubernetes which makes application deployment trouble-free, standardized, and reusable while improving developer productivity and reducing deployment complexity.

Although Kubernetes is a powerful and highly extensible container management tool, several challenges can hinder its adoption. Simply put, Kubernetes deployment can turn out to be an extremely complex process with all the objects you need to handle, including ConfigMaps, services, pods, Persistent Volumes, and the number of releases you need to manage. This is where Kubernetes Helm comes in handy by providing you with a simple way to package everything into one single application and advertises what you’re planning to configure.

Based on our in-production experience with Kubernetes and Hyperledger Fabric deployment, we’ve unveiled numerous Kubernetes related issues that can be alleviated using Helm. Below are a few of them:

- Impaired Developer Productivity: Developers often spend most of their time on deploying test environments to test their written code and imitate customer issues. With Kubernetes Helm, developers can primarily focus on developing applications rather than deploying dev-test environments. Helm charts like MySQL, MongoDB, etc. empower developers to quickly procure a working database for their application.
- Deployment Complexity: It’s no secret that deploying Kubernetes applications can be a tough ask for any developer. Programmers often use inappropriate inputs for configuration files; they hardly have the expertise to roll out these applications from YAML templates. This is where Helm charts really prove their worth by allowing software developers to preconfigure their apps with sensible default values. In addition to this, helm charts also allow developers to change parameters (memory, CPU resource limit, etc.) of the application using a consistent interface.
- Production Readiness: Deploying and maintaining Kubernetes-orchestrated containerized applications can be a tedious and error-prone process. Using helm charts can help you reduce the intricacy of maintaining an App Catalog in a Kubernetes production environment. Added to that, it also liberates operations teams from maintaining service tickets during Kubernetes application deployment.

# Final Words

Besides the ones mentioned above, there are numerous other prerequisites that you need to meet to effectively set up a production environment for your Hyperledger Fabric application. This includes detailed knowledge of how to add multiple organizations within a Fabric network, a thorough understanding of which data migration strategy to pursue, and more.

Once you meet all these prerequisites, you’re good to go. Now you can directly jump into deploying your Fabric solution on Kubernetes cluster. Good luck with that!
