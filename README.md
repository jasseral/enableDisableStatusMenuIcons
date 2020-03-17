# EnableDisableStatusMenuIcons

This Gnome extension remove the icons "_settingsAction","_powerOffItem" , "_suspendAction" from the Status area "Indicator menu (upper right corner)" , this was created for requirement in a upwork contract

This extension was created for running in Ubuntu 18.04, but must be work for 19.04 and 19.10 as well

# Previous requirements
1) sudo apt install gnome-shell-extensions


# How to install
1) Clone the respository 

2) Just run the script `sh install.sh system` (as root). this copy the extension to /usr/share/gnome-shell/extensions , once installed, you may need to restart your Gnome Shell. Use `ALT + F2` and indicate `r` or `restart`. and this extension will be avaliable in Tweaks->Extensions for enable or disabled.


