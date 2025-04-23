---
title: Creating a Wi-Fi Scanner with Python and Scapy
date: '2022-11-09'
author: Bhaskar Ram
categories:
  - scappy
  - python
  - rashahacks
description: "Wi-Fi Hacking: Creating a Wi-Fi Scanner with Python and Scapy \r \r Although there are numerous tools to hack Wi-Fi (802.11), to create your own tools y..."
images:
  - >-
    https://images.unsplash.com/photo-1468779036391-52341f60b55d?w=800&h=450&fit=crop
featured: false
---
### Wi-Fi Hacking: Creating a Wi-Fi Scanner with Python and Scapy 

Although there are numerous tools to hack Wi-Fi (802.11), to create your own tools you will need to understand the Wi-Fi protocol. In a previous tutorial, I explained the various types of frames in Wi-Fi. Now we will use that information to crate our own Wi-Fi scanner very similar to the aircrack-ng suite's airmon-ng or Kismet.

![alt](https://rashahacks.com/content/images/2022/11/6a4a49_7a739a0a2f1d4d2aaadc442e2142fd44-mv2.webp)

To begin, we will need to understand a bit about scapy. Scapy was written in Python and can  forge or decode packets, send them on the wire, capture them, and match requests and replies. It can also handle tasks like scanning, tracerouting, probing, unit tests, attacks, and network discovery. Scapy provides an interface to libpcap, the same library that Wireshark uses for packet capture and visualization. Scapy enables us then to grab packets and analyze for them for particular fields. So, for instance, if we were looking for beacon frames from an AP, we could filter for those with type 0 and subtype 8
This frame includes a variety of information including;

- Channel
- BSSID
- Type of Encryption
- SSID

If we can grab these frames and parse out this information, we will create a scanner that acts similar to kismet or airodump-ng as seen below.
![alt](https://rashahacks.com/content/images/2022/11/6a4a49_713c08d40a31490cbc320ab26281cd88-mv2.webp)
To keep things simple in this first script, we will create a scanner that captures and displays just the channel, BSSID, encryption and SSID.
Step #1: Select a Text Editor or IDE
To write your scripts you will need a text editor. Any text editor is fine such as leafpad, vim, gedit, vi, kate, etc. Scripting with an IDE such as PyCharm can be very helpful once you learn to use it.
In this tutorial, I'll be using Kate which is simple text editor with some IDE capabilities useful for python such as indent checking and color coding syntax. If your system doesn't have it installed, you can get it from the Kali repository by entering;
Kali > apt install kate
Step #2: Let's Start Coding
Let's get started. Start a new project in Kate (or other IDE or text editor). Name the project "wifi-scanner.py". If you are unfamiliar with Python check out the following basic tutorials with Python to acquire the necessary background.
The first thing we need to do with any Python script is to tell the system what interpreter we want to use and then import all the necessary modules. In this case we will need the scapy, sys, signal and os modules. To import scapy, you need to enter;
from scapy.all import *
If you haven't installed scapy, you will need to do so. You can enter;
kali > git clone https://github.com/secdev/scapy.git
kali > cd scapy
kali > sudo python setup.py install
![alt](https://rashahacks.com/content/images/2022/11/6a4a49_94eb2dd28b3340b79503d15527876b8d-mv2.webp)
Step #3: Create a Function to Terminate the Script at Ctrl+C
The next step is to create function that will exit the script if the user chooses to terminate it with a Crtl+C and provide the user with an appropriate message.
![alt](https://rashahacks.com/content/images/2022/11/6a4a49_a944ce1fb7ff4d369216d3a24b0ea9b0-mv2.webp)
Step #4: Create a Function to Exit
![alt](https://rashahacks.com/content/images/2022/11/6a4a49_2ea9bfc8b8a84664ad501479a9417702-mv2.webp)
Step #5 Create a Function that reminds the user of the Basic Syntax, if they enter it incorrectly
The basic syntax for this script is;
python ./WiFiScanner -i <interface>`
This function checks the user's syntax and if incorrect, provides a simple message informing the user of the proper syntax.
![alt](https://rashahacks.com/content/images/2022/11/6a4a49_cd003868a33f4788b2048bdd30a5102e-mv2.webp)
Step #6 Create a Function to Sniff packets
In this function, we will use scapy to sniff the wireless packets.

![alt](https://rashahacks.com/content/images/2022/11/6a4a49_8e5d1918d65f4f09aab42df675691d73-mv2.webp)
Step #7: Check Whether Packets Contain the Beacon Frame
In the previous step, we started sniffing packets. In this step, we check to see whether the sniffed frames are beacon frames. As we learned in the Anatomy of Wi-Fi, beacon frames are denoted by type = 0 and subtype =8.

Step #8: Create a Function to Track Discovered SSID's
Next, we create a function to track the discovered SSID's. In this way, we make certain that we are not duplicating discovered SSID's in our display.
![alt](https://rashahacks.com/content/images/2022/11/6a4a49_8940600ee63b41a99b6abce9ad9528ab-mv2.webp)
Step #9: Create a Function to place the Wireless Interface in monitor mode
This next function simply take the wireless interface and places it in monitor mode. In Wi-Fi, monitor mode is similar to promiscuous mode in wired NIC's. This allows the interface to "see" all the Wi-Fi traffic.
![alt](https://rashahacks.com/content/images/2022/11/6a4a49_8e5d1918d65f4f09aab42df675691d73-mv2.webp)
Step #10: Create a function to Check if User is root
For scapy requires that the user have root privileges to function properly. Our next function checks to see whether the userid=0 (root). In Linux, the root user us assigned UserID = 0. If not, it displays a message that the user must be root to run this script successfully.
![alt](https://rashahacks.com/content/images/2022/11/6a4a49_d33850fe6c83425bbb40d240c0715275-mv2.webp)
Step #11 Main Code Body
Now we enter the main code body where we will be executing each of the defined functions from above.
![alt](https://rashahacks.com/content/images/2022/11/6a4a49_440995ba09ad4e5d80c2127d48190c25-mv2.webp)
Step #12: Execute the Script
Make certain to save your script as "HackersAriseWiFiScanner" and give yourself execute permissions (chmod 755).
To execute your Wi-Fi scanner, enter;
kali > python ./WiFiScanner -i wlan0
![alt](https://rashahacks.com/content/images/2022/11/6a4a49_2ebc01ce0fb546c5a3578dc72cbfe4fb-mv2.webp)
As you can see, the script is able to find all the Wi-Fi AP's in range and display key information you will need to hack them!
## Summary
This simple script  uses the functionality of scapy to sniff Wi-Fi beacon frames to display all the Wi-Fi AP's in range with their channel, BSSID, type of encryption and SSID. You can now use this information to hack the Wi-Fi AP using one of the methods found here.
This is a first step toward developing your very own Wi-Fi hacking tool !
