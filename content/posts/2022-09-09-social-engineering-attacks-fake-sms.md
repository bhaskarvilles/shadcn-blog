---
title: Social Engineering Attacks - Creating a Fake SMS Message
date: '2022-09-09'
author: Bhaskar Ram
categories:
  - social engineering
  - fake sms
description: "Welcome back, my aspiring cyber warriors!\r \r Social engineering is a key feature of some of the biggest hacks in history! Many novice hackers are so f..."
images:
  - >-
    https://images.unsplash.com/photo-1468779036391-52341f60b55d?w=800&h=450&fit=crop
featured: false
---

**Welcome back, my aspiring cyber warriors!**

Social engineering is a key feature of some of the biggest hacks in history! Many novice hackers are so focused upon mastering the technical aspects of hacking that they ignore at their own peril the power of social engineering. When nation-state actors such as Russia's Sandworm hacking team (one of the most technically advanced hacker organizations)  use social engineering to hack Ukraine's electrical grid and the US 2016 Presidential election, that should be a sign that social engineering is important and critical to your hacking toolbox.

In the TV show, Mr Robot, Elliot and f/society use social engineering to hack Steel Mountain where Evil Corporation stores their backup tapes. Part of that social engineering is a SMS message (sent from a now obsolete feature in the `Social Engineering Toolkit (SET)`) to a manager that distracts her and enables Elliot to roam free in the facility, eventually leading him to the HVAC system of the vault where the tapes are stored. This is a complex and difficult hack but none of it would be possible without social engineering.


SMS messages or commonly referred to as text messages is a protocol originally developed in the 1980's and first implemented on the European mobile standard GSM in the 1990's. It has since been implemented into nearly every mobile communication protocol. It allows the users to send a short message (SMS is an acronym for short message service) of less than 160 characters from one person to another over the mobile network. It has become a ubiquitous feature of mobile communication in the 21st century.


## Let's take a look at how you can send fake SMS messages.

### Step 1 Download and Install Fake SMS

If we want to send fake SMS messages from Kali, we can download and install Fake-SMS. It's available on git hub.

```bash
kali > sudo git clone https://github.com/machine1337/fake-sms
```

Once it has been downloaded, navigate to the new directory;

```bash
kali > cd fake-sms
```

Now, give yourself execute permissions on run.sh 

```bash
kali > sudo chmod 755 run.sh 
```

Now, execute the script

```bash
kali > sudo ./run.sh
```

![alt](https://raw.githubusercontent.com/bhaskarvilles/chirpy-images/main/posts/2022/parrotsec/fakesms/6a4a49_f3b7d7a0cc614da2b048fd843c870f66_mv2.webp)


As you can see above, Fake-SMS opens a screen like that above with a simple menu. To send a SMS message, simply enter 2.


You will now be prompted for a phone number and message as seen below. I found this number among the many scams currently being perpetuated via SMS. This one promises forgiveness of your student loans.


I entered the phone number, hit enter and then was prompted for a message. I then entered "Yes! I want student loan forgiveness!"

![alt](https://raw.githubusercontent.com/bhaskarvilles/chirpy-images/main/posts/2022/parrotsec/fakesms/6a4a49_ed47e953ffc7499d918ad8aa12c55549_mv2.webp)

As you can see, I was able to send my fake SMS message to the scammers! With this script, we are able to send one fake SMS per day.


We can view the Fake-SMS script with any text editor. In this case, I opened it with mousepad. When we do so, we can see it is a simple BASH script. When we scroll down to lines 119-120, we can see a curl command to textbelt.com. Apparently, this script simply uses this SMS site to send text messages. 


Let's see whether we can bypass this script and work directly with this site.

![alt](https://raw.githubusercontent.com/bhaskarvilles/chirpy-images/main/posts/2022/parrotsec/fakesms/6a4a49_94d68719c80043daa477a3bda2e7c62c_mv2.webp)

### Step 2: Use the curl command to send Fake SMS

First, we need to open an account at textbelt.com. When we open an account, we can send one fake SMS message per day or we can purchase credits and get an API key to use their service.

Now we can generate our own text messages without the Fake-SMS script directly by creating a curl command in Linux (once you have an API, you can use a variety of scripting languages, but I found this curl command to be the simplest). The syntax for this command is as follows:

```bash
curl -X POST https://textbelt.com/text --data-urlencode phone='phone number with country code'


 --data-urlencode= message='text message'


-d key=Your API Key
```

I can then construct a command to send a fake text message as seen below using the same info from above and including my API key (blacked out).

[!alt](https://raw.githubusercontent.com/bhaskarvilles/chirpy-images/main/posts/2022/parrotsec/fakesms/6a4a49_55e2548489ed41f1a86275dfb14f00b7_mv2.webp)

This service responds with a message detailing the success of sending my message and the number of messages left in my quota.

## Summary

Although every hacker wants a nice, clean, technically advanced hack similar to EternalBlue, that is usually not possible except for in a limited number of cases. In reality, nearly all hacks today require an element of social engineering. As mentioned above, even the most sophisticated hacking organizations such as Russia's Sandworm have used elements of social engineering for some of their most important hacks in history. Being able to send fake SMS messages might be the critical element to your hack!


# Happy Hacking !!
