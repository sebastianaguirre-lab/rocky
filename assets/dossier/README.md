# Dossier Team Rocky

Primera versión modular del dossier de patrocinio 2027.

## Compilación

Desde esta carpeta:

```powershell
pdflatex main.tex
pdflatex main.tex
```

También se puede subir la carpeta completa a Overleaf y compilar `main.tex`.

## Criterio de edición

- Cada marcador “Aquí va una imagen de…” indica la fotografía o gráfico pendiente.
- Cada `.........................` representa información aún no confirmada.
- Los colores principales se configuran en `main.tex`.
- Cada sección está separada en su propio archivo para facilitar futuras ediciones.

## Imágenes

Cuando estén disponibles, se recomienda guardarlas en:

```text
assets/img/
assets/logos/
assets/icons/
```

Después, cada marcador se puede reemplazar por:

```latex
\includegraphics[width=\textwidth]{assets/img/nombre-de-la-imagen.jpg}
```
