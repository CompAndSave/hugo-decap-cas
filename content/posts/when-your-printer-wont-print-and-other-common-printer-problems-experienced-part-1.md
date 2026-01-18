---
title: "When Your Printer Won't Print (And Other Common Printer Problems Experienced) Part 1"
date: 2020-09-11T17:03:00.000Z
slug: when-your-printer-wont-print-and-other-common-printer-problems-experienced-part-1
description: "When Your Printer Won't Print (And Other Common Printer Problems Experienced) Part 1"
featured_image: /blog/images/archive/2020/09/pexels-fernando-arcos-193057.jpg
authors: Andrew Yeung
tags: []
---


When your printer starts having problems, the whole office operation can stop. You fiddle with the buttons, the cartridges, the cleaning cycle -only to find your old tricks don't work.

Don't get intimidated with learning new tricks! There are people who have been there. Here, we answer the commonly asked questions our audience have with their printers.

## Commonly Asked Printer Problems

### "My Printer Only Prints Images and Not Words"

When your printer would only print images but not text, your EMF (Enhanced Meta File) maybe activated. EMF commands Windows to delay some printing jobs if the printer is already printing another file. By activating EMF, the printer is able to process data faster. Because images have a lot of data, deferring text print jobs will allow printers to print faster.

Unfortunately, the deferred printing jobs can cram the hard drive space and cause difficulties to a network printer.

#### How to Disable EMF:

1. Type Devices and Printers in the Search Box of your computer's taskbar.
2. Choose the option Devices and Printers.
3. In the Devices and Printers window, right-click the icon of your printer.
4. Click Printer Properties.
5. Select the Advanced tab. Turn off the option Enable advanced printing features.
6. Click Apply. Click OK.

### "My Cartridge is New But It's Printing in Super Pale Color"

This can also be "My Ink Levels are full but the printing looks pale."

If you have recently replaced a cartridge and the printing is pale or not printing with the ink of said cartridge, you may have clogged printheads.

Printheads have microscopic nozzles that can get clogged easily with dried ink.

To confirm that you have clogged printheads, you can print a Test Page.

#### How to Print a Test Page

##### With Windows

1. Load A4 Printer Paper into your printer.
2. Type Devices and Printers in the Search Box of your computer's taskbar.
3. Choose the option Devices and Printers.
4. In the Devices and Printers window, right-click the icon of your printer.
5. Click Printing Properties.
6. Go to the General tab. Click Print Test Page.

##### With Mac

1. Load A4 Printer Paper into your printer.
2. Click the Apple Menu on your computer. Select System Preferences.
3. Choose Printers and Scanners.
4. Click the icon of your printer.
5. Select the Options & Supplies... button.
6. Choose the Utility tab and select Print Test Page.

If the Test Page has broken lines like these:

!

Then you do have clogged printheads.

#### How to Initiate a Cleaning Cycle

##### With Windows

1. Load A4 Printer Paper into your printer.
2. Type Devices and Printers in the Search Box of your computer's taskbar.
3. Choose the option Devices and Printers.
4. In the Devices and Printers window, right-click the icon of your printer.
5. Click Printing Preferences.
6. Go to the Maintenance tab and click Head Cleaning.

##### With Mac

1. Load A4 Printer Paper into your printer.
2. Click the Apple Menu on your computer. Select System Preferences.
3. Choose Printers and Scanners.
4. Click the icon of your printer.
5. Select the Options & Supplies... button.
6. Choose the Utility tab and click Open Printer Utility.
7. Click Head Cleaning then click Start.

### "Can I Use Any Ink in My Printer?"

This question can be a variety of specifications:

#### I. "Can I Use Sublimation Ink in my Inkjet Printer?"

Short answer: no.

Sublimation ink is printed on paper by being heated into gas which then clings into the printed surface as a permanent print.

Inkjet printers have a different mechanism.

Sublimation ink can only be printed effectively with sublimation printers or inkjet printers that are converted to use sublimation ink.

#### II. "Can I Use Dye-Based/Pigment-based Ink Cartridges for My Inkjet Printer?"

Short answer: yes.

Developments with both dye-based inks and pigment-based inks made them today with little difference when it comes to printing quality. Both are compatible with inkjet printers.

The difference between dye-based inks and pigment-based inks is dye-based inks are liquid colorants dissolved in a liquid formula. Pigment-based inks are solid particle colorants suspended in a liquid formula.

#### III. "Can I Use Third-party Ink Cartridges for my Inkjet Printer?"

Third-party cartridges or compatible cartridges are developed to have the same build as OEM (Original Equipment Manufacturer) cartridges.

Some printer manufacturers would warn that using compatible cartridges would lose your printer's warranty. However, your printer will only lose warranty if the manufacturers can prove that the printer's malfunction was caused by compatible ink cartridges.

Years ago, when the compatible ink cartridge industry was just starting, there were compatible cartridges that were a poor fit with printers and would leak. But today, with modern manufacturing that doesn't infringe on the patents of OEM cartridge manufacturers, that is rarely the case.

#### IV. "Can I Use Other Ink Cartridge Models for My Inkjet Printer?"

Short answer: No.


If the product page doesn't list it as an ink cartridge for your printer then don't do it. It may have the same ink as the proper cartridges, but it wasn't designed in mind to fit in your printer. Trying to use ink cartridges that are not listed as compatible may result in ink spillage.


Your printer may not also operate as it can detect an improper fit.

### "My Printer Stops Printing Even Though The File Isn't Yet Finished."

#### I. Check If Your Printer is Plugged to a Wall Outlet?

A printer performs better when plugged in a wall outlet.

#### II. Is the Document Corrupted?

To confirm, print another file. If it prints normally, the problem can lie on the original document.

#### III. Is Your Printer Assigned as your Default Printer?

1. Type Devices and Printers in the Search Box of your computer's taskbar.
2. Choose the option Devices and Printers.
3. If your printer doesn't have a checkmark, right-click the icon and select Set as Default Printer.

#### IV. Print Spooler Difficulties

The print spooler is where copies of the files are temporarily stored before it gets printed.

1. On your keyboard, press the Windows key and the R key at the same time.
2. The Run window will pop up. Type services.msc then click OK

!

1. Scroll down to Printer Spooler. Right-click Printer Spooler. Click Stop.

[![Printer spooler windows panel](/blog/images/archive/2020/09/article-2B3-2Bpart-2B1.png)](/blog/images/archive/2020/09/article-2B3-2Bpart-2B1.png)

1. In your computer's Start menu bar, click the **File Explorer** icon. In the address bar, type `C:WindowsSystem32SpoolPrinters` and hit **Enter**.

2. Press down the **Shift** key and select all the files.
3. Right-click the files and select **Delete**.

#### V. For Mac Computers: Is Your GPU Overloaded?

GPU or Graphics Processing Unit spools files for printers. When they get overloaded, printing can slow down or fail.

Since GPU processes a lot of other software, close any GPU intensive apps such as web browsers or raw processors.

#### VI. How to Confirm If You're Having Connection Problems

1. Check your printer's manual how to print a Network Configuration PAGE. You can also Google search how to print a Network Configuration Page with your printer model.
2. If the Network Configuration page prints normally but the print quality of other files have issues, then there is a wire or wireless connection problem.
3. If the Network Configuration Page has faulty print quality, the problem is in the printer itself.

#### VII. What to Do If My Printer is Having Connection Problems?

If your printer is using a wireless connection, you can either relocate your printer to a better WiFi spot or use a USB cable for better connectivity with your computer.

If your printer is connected with a USB cable, check if it's plugged well. Unplug and plug both ends to restart connection. If that doesn't work, USB cable replacement may be needed.

#### VIII. Are My Cartridges Stopping My Printer from Printing?

If there's trouble with the cartridges, the printer software would often notify for low ink levels and other messages. If it only tells of a general error, check if the cartridges still have a protective tape sealing on their nozzles.

#### IX. If All Else Fails…

If all else fails, restarting the printer will usually clear up any communication problems within the printer and its connection with the computer.

### "How Do I Keep My Inkjet Printer From Having Clogs?"

Inkjet Printers require a lot more maintenance than laser printers. However, that doesn't mean the maintenance would be hard.

#### Daily

Always keep your inkjet printer plugged. The inkjet's printheads are semiconductive. Keeping the printer plugged allows the ink remnants on the printheads melted longer instead of solidified.

#### Weekly

An inkjet printer must be used often to prevent ink from drying up in the printer's microscopic nozzles. If one doesn't print often, printing a Test Page 1-2 times a week will suffice.

#### Monthly

When the printing quality of your printer shows white lines or streaks, then it's time to initiate a cleaning cycle. If it doesn't work, then it's time to know how to manually clean your printheads.

#### How to Clean Your Printer's Printheads Manually

* For Printer-Installed Printheads:
1. Properly uninstall your ink cartridges.
2. In the ink receptacle of your printer, use a dropper to drop 8-10 drops of 91% denatured isopropyl alcohol.
3. Wait for 30-60 seconds for alcohol to dissolve the clogs.
4. Initiate 3-5 times of cleaning cycles after.


* For Cartridge-Installed Printheads or Removable Printheads:
1. Properly uninstall your ink cartridges.
2. Soak the printheads in 91% denatured isopropyl alcohol overnight.
3. Wipe with a moist paper towel and let it dry.
4. Properly install your ink cartridges again.
5. Initiate 3-5 times of cleaning cycles after.

### "My Newly Installed Cartridge isn't Working."

In general, the cause could be dirty cartridge chips during the manufacturing or packaging process.

1. Properly uninstall the cartridge.
2. Dampen a paper towel and gently glide it across the chip to clean it of dirt, dust or fingerprints.
3. Allow it to dry.
4. Unplug your printer for 15-20 seconds. Plug it back again.
5. Properly install the cartridge.

If the cartridge isn't working, then it's time to get more specific by knowing how to how to make your printer accept your cartridge by your printer's brand.

Get ready for "When Your Printer Won't Print (And Other Common Printer Problems of Epson and HP) Part 2" in our next publication.