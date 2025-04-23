---
title: >-
  New WhatsApp 0-Day Bug Let Hackers Execute a Code & Take Full App Control
  Remotely
date: '2022-09-27'
author: Bhaskar Ram
categories:
  - whatsapp
  - hacking
  - 0 day
description: >-
  WhatsApp silently fixed two critical zero-day vulnerabilities that affect both
  Android & iOS versions allowing attackers to execute an arbitrary code ...
images:
  - >-
    https://images.unsplash.com/photo-1468779036391-52341f60b55d?w=800&h=450&fit=crop
featured: false
---

WhatsApp silently fixed two critical zero-day vulnerabilities that affect both Android & iOS versions allowing attackers to execute an arbitrary code remotely.

![alt](https://i0.wp.com/blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyqCX58BbzMt4b6AorcIFMeo51MA8QTbY-UKNN2-xETgunEOyZMXjIZx95yi9szSSQPXA6PuDhvpqutIJ2AHIsmtrokxs6tt7_XuZugAnDq132gz7MCW-tsYQTXXNUzVhd7pD4d01D821IcyCN321Kko15fmlssSZQBAq89z6lw4yRej_6EPwdqwBzNQ/s16000/WhatsApp%200-Day%20Bug.png)

Facebook-owned messenger WhatsApp is one of the Top-ranked Messenger apps with more than Billion users around the world in both Android and iPhone.

Both vulnerabilities are marked under “critical” severity with a CVE Score of 10/10 and found by the WhatsApp internal security Team.

Simplifying these following vulnerabilities, Whatsapp could cause your device to be hacked by receiving a Video File or When on a Video call.

## `CVE-2022-36934` –  Integer Overflow Bug

An Integer overflow bug that affects WhatsApp allows attackers to execute the specially crafted arbitrary code during an established Video call without any sort of user interaction.

An integer overflow also know as “wraparound” occurs when an integer value is incremented to a value that is too large to store in the associated representation. 

This RCE bug affects an unknown code of the WhatsApp component Video Call Handler, which allows an attacker to manipulate the bug to trigger a heap-based buffer overflow and take complete control of WhatsApp Messenger.

“A heap overflow condition is a buffer overflow, where the buffer that can be overwritten is allocated in the heap portion of memory, generally meaning that the buffer was allocated using a routine such as malloc().”

Hackers can take advantage of this remote code execution vulnerability to deploy the malware on the user’s device to steal sensitive files and also used for surveillance purposes.

> According to WhatsApp Advisory “An integer overflow in WhatsApp for Android prior to v2.22.16.12, Business for Android prior to v2.22.16.12, iOS prior to v2.22.16.12, Business for iOS prior to v2.22.16.12 could result in remote code execution in an established video call.”

## `CVE-2022-27492` – Integer Underflow Bug

An Integer Underflow vulnerability (`CVE-2022-27492`) allows attackers to execute the arbitrary code remotely, and user interaction is required to exploit this bug successfully.

“Integer underflow” is sometimes used to identify signedness errors in which an originally positive number becomes negative as a result of subtraction. However, there are cases of bad subtraction in which unsigned integers are involved, so it’s not always a signedness issue.

This issue affects an unknown code block of the component Video File Handler. The manipulation with an unknown input leads to a memory corruption vulnerability. 

To exploit this vulnerability, attackers drop a crafted video file on the user’s WhatsApp messenger. The successful execution with the help of user interaction let hackers gain complete access to the messenger and steal sensitive data from your mobile device.

Whatsapp fixed the bugs and released a security advisory for 2 vulnerabilities that affects both Android & iOS version of Following:

**CVE-2022-36934**
- Android prior to v2.22.16.12
- Business for Android prior to v2.22.16.12
- iOS prior to v2.22.16.12
- Business for iOS prior to v2.22.16.12

**CVE-2022-27492**
- Android prior to v2.22.16.2
- iOS v2.22.15.9

So far, no technical details are available for these critical WhatsApp Vulnerabilities, and an exploit is not available at this moment. As 0-day the estimated underground price was around $5k-$25k per vulnerability.

> “WhatsApp is constantly working to improve the security of our service. We make public, reports on potential issues we have fixed consistently with industry best practices. In this instance, there is no reason to believe users were impacted.”

Users are advised to update the latest version of WhatsApp Messenger to prevent your devices from these critical RCE bugs.
