---
title: Strassen`s Algorithm
date: '2022-12-12'
author: Bhaskar Ram
categories:
  - mathematics
  - algorithm
  - matrix calculation
description: "Multiplying Matrices\r \r #Standard Algorithm:\r \r Matrix multiplication is one of the most fundamental and ubiquitous operations in all of mathematics. ..."
images:
  - >-
    https://images.unsplash.com/photo-1468779036391-52341f60b55d?w=800&h=450&fit=crop
featured: false
---

# Multiplying Matrices

#Standard Algorithm:

Matrix multiplication is one of the most fundamental and ubiquitous operations in all of mathematics. To multiply a pair of n-by-n matrices, each with n2 elements, you multiply and add these elements together in particular combinations to generate the product, a third n-by-n matrix. The standard recipe for multiplying two n-by-n matrices requires n3 multiplication operations, so a 2-by-2 matrix, for example, requires eight multiplications.

![alt](https://raw.githubusercontent.com/bhaskarvilles/chirpy-images/main/STANDARD_ALGORITHM_MOBILE-cr.MerrillSherman-1.svg)

For larger matrices, with thousands of rows and columns, this process quickly becomes cumbersome. But in 1969, the mathematician Volker Strassen discovered a procedure for multiplying a pair of 2-by-2 matrices using seven rather than eight multiplication steps, at the cost of introducing more addition steps.

![alt](https://raw.githubusercontent.com/bhaskarvilles/chirpy-images/main/STRASSEN_ALGORITHM_mobile-cr.MerrillSherman.svg)

Strassen’s algorithm is needlessly convoluted if you just want to multiply a pair of 2-by-2 matrices. But he realized it would also work for bigger matrices. That’s because the elements of a matrix can themselves be matrices. For example, a matrix with 20,000 rows and 20,000 columns can be reimagined as a 2-by-2 matrix whose four elements are each 10,000-by-10,000 matrices. Each of these matrices can then be subdivided into four 5,000-by-5,000 blocks, and so on. Strassen could apply his method to multiply 2-by-2 matrices at each level of this nested hierarchy. As the matrix size increases, the savings from fewer multiplications grows.

