---
title: How to Track and Analyze Experiments in Machine Learning
desc: Risus a sit tortor vel et. Dolor velit facilisis dictum ipsum. Nisi elementum ultrices...
author: Authors Name
publish: Publish Date
slug: track-analye-experiment
featured: true
thumb: ../images/thumbs/folder3.png
featuredImg: ../images/featured/featured-img.png
date: 2021-03-01T00:00:00+00:00
nextPost: ml-experiment-tracking-dagshub
---

This blog is part two of a two-part series introducing experiment tracking in machine learning (ML). Here, we cover the practical implementation of experiment tracking using a platform-based tool. Here's [part one](https://hackmamba.io/blog/2022/12/how-to-track-and-analyze-experiments-in-machine-learning-a-beginner-s-guide/) covering an introduction on how to track and analyze experiments in Machine Learning.

<br />

In practice, having some infrastructural setup, which can be referred to as a “workbench,” within the development pipeline is the way to go. It structures the workflow, but this is easier said than done. Although some cloud platforms have provided various out-of-the-box workbench platforms/services (like [Vertex AI](https://cloud.google.com/vertex-ai-workbench), [Sagemaker](https://aws.amazon.com/sagemaker/), [AzureML](https://learn.microsoft.com/en-us/azure/machine-learning/overview-what-is-azure-machine-learning?view=azureml-api-2)) ready for use, it doesn’t always cover all the use cases.

<br />

This often requires engineers to design and build an architecture for the workbench that best suits their workflow with external and in-house tools—which is outside the scope of this article. However, a typical workflow for this development stage will demonstrate how a specific problem might affect the workflow design and how the solution would play out with an out-of-the-box workbench.

<br />

Here, we’ll implement the experimentation workflow using <span style="color: #874FFF;">[DagsHub](https://dagshub.com/??utm_medium=hackmamba-blog)</span>, <span style="color: #874FFF;">[Google Colab](https://colab.research.google.com/)</span>, <span style="color: #874FFF;">[MLflow](https://mlflow.org/)</span>, and <span style="color: #874FFF;">[Data version control (DVC)](https://dvc.org/)</span>. We’ll focus on how to do this without diving deep into the technicalities of building or designing a workbench from scratch. Going that route might increase the complexity involved, especially if you are in the early stages of understanding ML workflows, just working on a small project, or trying to implement a proof of concept.

<br />
<br />

## Prerequisites

<br />

The following are required to follow along with this article comfortably:

<br />

- A basic understanding of ML

<br />

- A DagsHub account
- You will need to connect your GitHub repository to DagsHub. This blog will show you how. This makes it possible to seamlessly version control your workflows with both GitHub and DagsHub, giving you the extra capabilities DagsHub provides and are necessary for ML workflows.
  You can find the code for this project in this repository.
  In this article, you will:
- Use DagYard to set up remote environments on Google Colab
- Version data with DVC and store it in DagsHub storage
- Train and track model experiments with MLflow on Google Colab
- Understand how use cases drive the ML development process

<br />

## Case study: Train a model to translate alphabets to sign languages

<br />

As a young research student, you decide to work on a simple side project that classifies all the letters of the alphabet for sign language. You cannot train this model on your local machine because the computational cost of training is expensive (the kernel or runtime keeps crashing). You must figure out an easy way to train the computer vision model without incurring financial costs or worrying about infrastructure setup.

<br />

Unfortunately, the allocated grant won’t cover this project. So, you can’t afford to use cloud services (like virtual machines (VMs), workbench, etc.), and other experienced engineering colleagues that might be able to help brainstorm for this hiccup in setup (workbench) are too occupied with work.

<br />

## Case study requirements

<br />

Have a remote workbench setup with better computing power to enable faster and easier training. You should also be able to track your experiments as you optimize for the best model and where different versions of the data will persist.
Note: There is a rich option of tools to pick from for every step in this article. The individual functionality and integration of these tools/platforms made implementing this use case easy.

<br />

The workflow architecture for the out-of-the-box workbench looks like this:

<br />

![Imageeeeeee](/images/md1.png)

<br />

## What is DagYard

<br />

[DagYard](https://colab.research.google.com/drive/1XLP2Ouxk-k6y9yOxc4Grp-Aq6aGcbhuj) is a configuration tool in the form of a notebook for DagsHub. It brings the DagsHub environment runtime of any “hosted” project to Google Colab by pulling all the components remotely and having them run on the Google Colab runtime while having direct access to all DagHub features.

<br />

This way, you don’t always have to worry about uploading or reloading data paths from Google Drive each time the kernel dies during training. You also won’t have to worry about the source code because you can now have everything in one place—plus you can now completely take advantage of Google Colab’s free computing power privileges.

<br />

You must have all the correct parameters and environment variables set at the beginning of the notebook. The authentication and configurations process is as straightforward as checking a few boxes from the list of available options and filling out the credentials—based on what you want to configure directly from DagsHub. VOILA!!! It’s all set for action.

<br />

DagYard is used to configure the environment for this demonstration.

<br />

![Imageeeeeee](/images/md2.png)
<br />
![Imageeeeeee](/images/md3.png)
<br />
![Imageeeeeee](/images/md4.png)
<br />

After setting up the [project](https://colab.research.google.com/github/Tob-iee/experiment-tracking/blob/main/Notebooks/run_experiment_workflows.ipynb#scrollTo=_ult64024ro8). Run the “help function” and “black magic” blocks to pull the project from DagsHub into the Colab directory.

<br />

![Imageeeeeee](/images/md5.png)

<br />

After setting up the [project](https://colab.research.google.com/github/Tob-iee/experiment-tracking/blob/main/Notebooks/run_experiment_workflows.ipynb#scrollTo=_ult64024ro8). Run the “help function” and “black magic” blocks to pull the project from DagsHub into the Colab directory.

<br />
<br />

## Version and store the data with DVC

<br />

# About the Data

<br />

You will be working with image data. The file structure from the [data source](https://public.roboflow.com/object-detection/american-sign-language-letters/1) contains all the images and a CSV file with the image features for each image (i.e., annotation, labels, etc.). The image folder structure has train, test, and validation set splits.
The data will be converted to a TFRecord format and recorded as a new data version. This preprocessing step reduces the data size and will make the training process easier since you are using TensorFlow. The src/data_preprocessing.pyscript performs this makeover.

<br />

Understand that you are working with the idea that data that comes from the data source can change at any time — which is what happens in practice. That is why you have chosen to version the data after preprocessing. Ideally, this represents the extraxt transform load (ETL) process.

<br />

![Imageeeeeee](/images/md6.png)

<br />

DVC tracks data and uses a remote storage location to store the data. It supports a variety of remote storage locations like (s3 bucket, Google Drive, Azure blob storage, Google storage buckets, etc.). Although these are all excellent options, they might require a lot of configuration to set up or cost more because they are better suited for more complex workflows or robust solutions with scalability. If you’re thinking “Google Drive is free and easy to configure,” you are correct, but it limits your abilities when tracking training. You will get to understand this better in a bit.

<br />

Fortunately, DagsHub provides free remote storage with 10GB of space by default for every project (repository) that DVC supports.

<br />

Thanks to DagYard, it has already been configured as the remote storage location — but the data_store/data directory will serve as your feature store for the processed data.

<br />
<br />

## Using MLflow for model experiments

<br />

As established earlier, it’s not uncommon to run many experiments in ML. It is essential to log all information from each set of experiments. The roadmap to arriving at a particular model becomes easier to trace.

<br />

You will make use of MLflow to manage the training information. Usually, it would require initializing and configuring a server to run on your local or remote machine. Its integration with DagHub allows us to use it just as you would when working on a proxied server. Select the MLflow option from the notebook configuration cell on the Dagyard to configure access to the MLflow tracking server (URI). This way, the tracking server is automatically running on DagsHub’s backend server.

<br />

Although this setup might not give complete control over MLFlow because you don’t have direct access to the management/running of the server or backend store (database), you can always use the MLflow client API to communicate with the tracking server. These are the kind of trade-offs that you might come across when building your solution with different tools.

<br />
<br />

## Run experiment workflow

<br />

Since you have the project runtime on Colab, you can efficiently run the training with the paths to the source code and data. The train.py script has all you need to set, train, and log all the information required from an experiment.

<br />

The teeny-tiny issue is that on the free Google Colab plan, there isn’t access to a terminal console. Not to worry: you can use the good old hack of accessing the terminal from your notebook to run your experiments. You will also push and commit your change within a configured notebook (DagYard).

<br />

With the help of a pipeline, processes/workflows like this can be streamlined, seamless, and repeatable. A DVC pipeline executes the entire workflow—from data ingestion and preprocessing to model training.

<br />

<span style="color: #874FFF;">[https://gist.github.com/Tob-iee/7b950a34de5d55a36db972cb91c8d984](https://gist.github.com/Tob-iee/7b950a34de5d55a36db972cb91c8d984)</span>
Disclaimer: Ideally, this is not good practice, but it gets the job done and demonstrates the workflow concept, in this case. Running Notebooks/run_experiment_workflows.ipynb will spin up the entire pipeline process.

<br/>

You can also find two other notebooks (local_runtime.ipynb and colab_runtime.ipynb) in the Notebooks directory for local runtime training and Google Colab runtime training, respectively. Just for context, and if you would like to understand the above approach better, feel free to run them.

<br/>

After the training process is complete, push the changes. Go back to the DagsHub interface, and you can see the workflow dags from the pipeline.
