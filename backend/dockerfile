# Usa un'immagine di base con Node.js
FROM node:latest

# Imposta la directory di lavoro all'interno del container
WORKDIR /app

# Copia il file package.json nella directory di lavoro
COPY package.json .

# Installa le dipendenze dell'applicazione
RUN npm install

# Copia il resto del codice nell'immagine
COPY . .

# Esponi la porta su cui l'applicazione ascolta
EXPOSE 3000

# Avvia l'applicazione quando il container viene eseguito
CMD ["npm", "start"]