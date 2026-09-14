Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Rafael\.gemini\antigravity\brain\46433415-3731-4d4f-9fd3-901e020647b8\.user_uploaded\media_1789406871886.png"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)

# Macro close-up crop of the conductors and shield (x: 80 to 210, y: 275 to 370)
$coreRect = New-Object System.Drawing.Rectangle(75, 275, 140, 100)
$coreBmp = $src.Clone($coreRect, $src.PixelFormat)
$coreBmp.Save("src\assets\images\beruf-cable-core.png", [System.Drawing.Imaging.ImageFormat]::Png)
$coreBmp.Dispose()

$src.Dispose()
Write-Output "Macro crop created: beruf-cable-core.png"
