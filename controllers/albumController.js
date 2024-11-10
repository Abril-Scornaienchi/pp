// const { Album, Song } = require('../models'); // Importa tus modelos

// Crear un nuevo álbum
exports.createAlbum = async (req, res) => {
  const { albumName } = req.body;
  try {
      const newAlbum = await Album.create({ name: albumName });
      res.redirect(`/album/${newAlbum.id}`); // Redirige a la página del álbum creado
  } catch (error) {
      console.error(error);
      res.status(500).send('Error al crear el álbum');
  }
};

// Mostrar un álbum y sus canciones
exports.showAlbum = async (req, res) => {
  const albumId = req.params.id;

  try {
      const album = await Album.findByPk(albumId, { include: Song });
      res.render('album', { album });
  } catch (error) {
      console.error(error);
      res.status(404).send('Álbum no encontrado');
  }
};

// Agregar una canción a un álbum
exports.addSong = async (req, res) => {
  const albumId = req.params.id;
  const { title } = req.body;

  try {
      const album = await Album.findByPk(albumId);
      await album.createSong({ title });
      res.redirect(`/album/${albumId}`);
  } catch (error) {
      console.error(error);
      res.status(500).send('Error al agregar la canción');
  }
};