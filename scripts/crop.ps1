Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Rafael\.gemini\antigravity\brain\46433415-3731-4d4f-9fd3-901e020647b8\.user_uploaded\media_1789406871886.png"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)

# Crop cable image
$cableRect = New-Object System.Drawing.Rectangle(0, 275, 215, 105)
$cableBmp = $src.Clone($cableRect, $src.PixelFormat)

# Clean out the top-left burned-in label with background color sampled from (120, 10)
$bgColor = $cableBmp.GetPixel(120, 10)
$brush = New-Object System.Drawing.SolidBrush($bgColor)
$g = [System.Drawing.Graphics]::FromImage($cableBmp)
$g.FillRectangle($brush, 0, 0, 70, 42)
$g.Dispose()
$brush.Dispose()

$cableBmp.Save("src\assets\images\beruf-cable-hero.png", [System.Drawing.Imaging.ImageFormat]::Png)
$cableBmp.Dispose()

# Also crop the Hero robotic arm image (Section 01)
$heroRect = New-Object System.Drawing.Rectangle(186, 36, 124, 110)
$heroBmp = $src.Clone($heroRect, $src.PixelFormat)
$heroBmp.Save("src\assets\images\beruf-robotic-hero.png", [System.Drawing.Imaging.ImageFormat]::Png)
$heroBmp.Dispose()

# Also crop the automotive welding cell image (Section 05 - Black)
$autoRect = New-Object System.Drawing.Rectangle(75, 490, 290, 110)
$autoBmp = $src.Clone($autoRect, $src.PixelFormat)
$autoBmp.Save("src\assets\images\beruf-automotive-cell.png", [System.Drawing.Imaging.ImageFormat]::Png)
$autoBmp.Dispose()

$src.Dispose()
Write-Output "Successfully extracted and cleaned assets!"
