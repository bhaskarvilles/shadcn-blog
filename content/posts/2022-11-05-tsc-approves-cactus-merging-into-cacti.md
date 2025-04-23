---
title: Hyperledger Cactus Project moved to Cacti
date: '2022-11-05'
author: Bhaskar Ram
categories:
  - hyperledger
  - cactus
  - blockchain
description: "TSC Approves Hyperledger Cactus as New Project\r \r - By Michael Klein, Blockchain and Multiparty Systems Architecture Lead at Accenture, and Hart Montg..."
images:
  - >-
    https://images.unsplash.com/photo-1468779036391-52341f60b55d?w=800&h=450&fit=crop
featured: false
---

# TSC Approves Hyperledger Cactus as New Project

- By Michael Klein, Blockchain and Multiparty Systems Architecture Lead at Accenture, and Hart Montgomery, Fujitsu Laboratories.

![alt](https://www.hyperledger.org/wp-content/uploads/2020/05/HL_Website_TwitterImages_Cactus.png)

## Building DLT integration protocol

We are thrilled to announce that the open source Blockchain Integration Framework that Accenture and Fujitsu jointly contributed to Hyperledger Labs has been welcomed as the latest Hyperledger project. With this, the project receives a formal name, Hyperledger Cactus, and also benefits from the resources and promise of longevity that come with inclusion in the Hyperledger Greenhouse.

### Key Take-Aways:

- TSC approves new project – Hyperledger Cactus (formerly known as Blockchain Integration Framework)
- The move from Labs to the Hyperledger Greenhouse is an important step in the direction towards production-readiness
- Now is the time for end-user, SI, and vendor developers to participate in defining the architecture of blockchain integration service

In the short six months since entering the Labs, Hyperledger Cactus has attracted significant attention and become a locus of collaboration between developers from our teams at Accenture and Fujitsu, and dozens of others working on DLT platforms both inside and outside Hyperledger. We are very excited to carry this work of establishing an open integration protocol forward, setting our sights on increasing the number and diversity of perspectives and building the community and process maturity in order to graduate from Incubation to Active status as a project.

**Why Blockchain Integration?**

Innovation in the blockchain space shows no signs of slowing down. This is amazing to see, but when it comes to large scale enterprise adoption today, this rapid pace of change can also be a source of risk. What if the platform I select gets leapfrogged? Or what if I need to conduct business with an ecosystem in the future that’s using a different technology? These questions can manifest in a high stakes decision to choose “the right” solution.

But we live in a world of many networks and databases with differing business requirements. Some need to be fast, some need to store a lot of data, and some need strong resilience properties. As businesses replace traditional infrastructure with multiparty systems, we need blockchain technology to handle a wide variety of possible use cases and requirements. In other words, there will be no “one blockchain solution to rule them all.”

Brian Behlendorf describes this well in his Coindesk 2019 Year in Review: “From here out, the basic business and technical questions – can this be used for real-world use cases?; can competing vendors cooperate on common code and standards? – will be considered more or less answered, with new questions about governance of blockchain networks and interoperability between them taking center stage.”

Enterprises need to be able to confidently move forward with the blockchain platform that best meets their needs today, with the assurance they can integrate, communicate, operate, and transact with any other tech down the road. 

For example, imagine a “fast” blockchain used for processing small-value financial transactions periodically that needs to communicate and even trade with more secure, “slow” blockchains that handle large assets or high-value transactions. Banking-focused blockchains might need to communicate with blockchains that are used to manage real estate. The possibilities and useful applications for blockchain integration services are quite large.

**What is Hyperledger Cactus?**

Hyperledger Cactus is an Apache V2-licensed open source software development kit (SDK) designed and architected to help maximize pluggability so that anyone wishing to use it to connect any DLT to others can do so by implementing a plugin (please check out the Whitepaper for a detailed technical description). This pluggable architecture helps enable the execution of ledger operations across multiple blockchain ledgers, including Hyperledger Besu, Hyperledger Fabric, Corda, and Quorum available today, with the aim of developers continually adding support for new blockchains in the future.

The beauty of open source, in particular the permissively licensed Hyperledger flavor, means that each entity that writes a plugin can decide whether to contribute it to the community for ongoing maintenance, and to be used by all, or keep it private. In either case, the core Integration Framework will always be available under the Apache v2 license and maintained by the Hyperledger community. Accenture filed two patents on the approach (10,298,585 and 20190253422) and are making the patents available through this code under the Apache 2 license. In our view, the pluggable design combined with Hyperledger governance make this the right solution to the blockchain interoperability challenge.

**Why Start in Labs?**

We at Accenture and Fujitsu realized the market need for blockchain integration independently and quickly realized the opportunity to collaborate. Accenture began working on the blockchain interoperability challenge in 2018 and realized that long-term success hinged on building a broader ecosystem around the project, which led to open sourcing this work to Hyperledger Labs in November 2019. Fujitsu came aboard as key collaborators at last year’s Hyperledger Tokyo Member Summit and contributed the ConnectionChain codebase in December 2019. Then, the two companies considered a unified architecture based on the two code bases. The results are described in the white paper.

Hyperledger Labs provides an easy way to test the technical and community viability of potential new Hyperledger projects. It’s a valuable initial step to determine interest prior to undertaking the significantly more intense process of proposing a new Hyperledger project.

It didn’t take long for interest in Hyperledger Cactus to emerge. Following our joint presentation at Hyperledger Global Forum 2020 in Phoenix, several people from academia and enterprises expressed interest in working on this project. Thus began the conception (and name!) of Hyperledger Cactus. While it’s always gratifying to hear positive feedback, the real test of a project’s viability is when people roll up their sleeves and make contributions, be they code, documentation, or perspective.

A PhD student pursuing a summer internship at Hyperledger focused their research on the topic of ledger-to-ledger migrations. And developers at Accenture, Fujitsu, and several other organizations are working on converging the code bases into a unified core system. For two independent teams of enterprise engineers (Accenture and Fujitsu in this case) to separately arrive at the need for an open source solution to address the challenges of cross-ledger system transactions validates both the size of the problem space and the veracity of the Hyperledger Cactus approach to addressing it.

**What’s Next?**

As Hyperledger Cactus joins the other 15 Hyperledger projects in the greenhouse, our number one priority is to grow the community. Always a goal of open source projects, we feel it is especially important for Cactus now so that we can obtain ideas from as broad a cross-section of the blockchain community as possible and get them built into the architecture of the project from the start.

Our first effort as a community will be to finalize our modular, pluggable interfaces so that all stakeholders in Hyperledger (and others outside Hyperledger that wish to participate) can benefit from our solution for blockchain interoperability. A diverse community is an important first step to assuring innovation continues to flourish across this dynamic space, helping it to both scale and achieve its  potential across a global network of ecosystems.

And don’t let the name fool you – the Cactus community is not at all prickly 😊. On the contrary, we are extremely open and all are welcome! You don’t have to ask to ask. Please jump into the conversation on our Chat channel, check out our repo, read the contributing document, attend our meetings, and together we can build a modular, extensible system that makes it possible to easily incorporate and integrate new blockchains as they get developed.

Source : [Hyperledger Blog](https://www.hyperledger.org/blog/2020/05/13/tsc-approves-hyperledger-cactus-as-new-project)
