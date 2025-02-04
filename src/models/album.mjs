import mongoose from 'mongoose';

const AlbumSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  photos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Photo' }],
  created_at: { type: Date, default: Date.now }
}, {
  collection: 'albums',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    const retUpdated = ret;
    retUpdated.id = ret._id;
    delete retUpdated._id;
    return retUpdated;
  }
});

export default mongoose.model('Album', AlbumSchema);
