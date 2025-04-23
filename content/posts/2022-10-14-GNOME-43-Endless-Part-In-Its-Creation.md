---
title: GNOME 43 Endless Part In Its Creation
date: '2022-10-12'
author: Bhaskar Ram
categories:
  - os
  - linux
  - gnome
description: >-
  GNOME 43 is out, and as always there is lots of good stuff in there. (Me circa
  2014 would be delighted to see the continuous improvements in GNOME’s b...
images:
  - >-
    https://images.unsplash.com/photo-1468779036391-52341f60b55d?w=800&h=450&fit=crop
featured: false
---
GNOME 43 is out, and as always there is lots of good stuff in there. (Me circa 2014 would be delighted to see the continuous improvements in GNOME’s built-in RDP support.) During this cycle, the OS team at Endless OS Foundation spent a big chunk of our time on other initiatives, such as bringing Endless Key to more platforms and supporting the Endless Laptop programme. Even so, we made some notable contributions to this GNOME release. Here are a few of them!

## App grid pagination improvements

The Endless OS desktop looks a bit different to GNOME, most notably in that the app grid lives on the wallpaper, not behind it. But once you’re at the app grid, it behaves the same in both desktops. Endless OS computers typically have hundreds of apps installed, so it’s normal to have 2, 3, or more pages of apps.

We’ve learned from Endless OS users and partners that the row of dots at the bottom of the grid did not provide enough of a clue that there are more pages than the first. And when given a hint that more pages are available, indicated by those dots, users rarely discovered that they can switch with the scroll wheel or a swipe: they would instead click on those tiny dots. Tricky even for an accomplished mouse user!

GNOME 40 introduced an effect where moving the mouse to the edges of the screen would cause successive pages of apps to “peek” in. As we’ve carried out user testing on our GNOME 41-based development branch (more on this another time) we found that this was not enough: if you don’t know the other pages are there, there’s no reason to deliberately move your mouse pointer to the empty space at the edges of the screen.

So, we proposed for GNOME something similar to what we designed and shipped in Endless OS 4: always-visible pagination arrows. What we ended up implementing & shipping in GNOME 43 is a bit different to what we’d proposed, after several rounds of iteration with the GNOME design team, and I think it’s even better for it. Implementing this was also an opportunity to fix up many existing bugs in the grid, particularly when dragging and dropping between pages.

![alt](https://blogs.gnome.org/wjjt/files/2022/10/Screenshot-from-2022-10-13-10-46-32.png)

![alt](https://blogs.gnome.org/wjjt/files/2022/10/Screenshot-from-2022-10-13-10-47-18.png)

## GNOME Software

43% of the code-changing commits between GNOME Software 42.0 and the tip of gnome-software main as of 29th September came from Endless – not bad, but still no match for Red Hat’s Milan Crha, who single-handedly wrote 46% of the commits in that range! (Counting commits is a crude measure, and excluding translation updates and merge commits overlooks significant, essential work; even with those caveats, I still think the number is striking.)

Many of our contributions in this cycle were part of the ongoing threading rework that Philip Withnall spoke about at GUADEC 2022, with the goals of improving performance, reducing memory usage, and eliminating hangs due to thread-pool exhaustion. Along the way, this included some improvements to the way that featured and Editor’s Choice apps are retrieved.

Several patches bearing Joaquim Rocha’s name and an Endless email address landed in this cycle, improving Software’s handling of apps queued for installation, despite Joaquim having moved on from Endless 3 years ago. These originally come from Endless’s fork of GNOME Software and date back to 2018, and made their way upstream as part of our quest to converge our fork with upstream. In related news, we recently rebased the Endless OS branch of Software onto the gnome-43; we are down from 200+ patches a few years ago to 19. Nearly there!

At the start of this year, Phaedrus Leeds was contracted by the GNOME Foundation (funded by Endless Network) to reintroduce the ability to install and manage web apps with Software, even when GNOME Web is installed with Flatpak. This work was not quite ready for the GNOME 42 feature freeze, and landed in GNOME 43. I personally did a trivial amount of work to enable this feature in GNOME OS and add a few sites to the curated list, but as I write this post I have realised that these additions were not actually shipped in the GNOME Software 43.0 tarball. I did a bit of research into how we can expand this curated list without creating a tonne of extra work for our community of volunteers, but haven’t had a chance to write this up just yet.
