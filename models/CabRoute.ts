import mongoose from 'mongoose';

const CabRouteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title for the route.'],
      maxlength: [60, 'Title cannot be more than 60 characters'],
    },
    slug: {
      type: String,
      required: [true, 'Please provide a slug.'],
      unique: true,
      maxlength: [60, 'Slug cannot be more than 60 characters'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide a price.'],
    },
    description: {
      type: String,
      required: false,
    },
    distance: {
      type: String,
      required: false,
    },
    estimatedTime: {
      type: String,
      required: false,
    },
    imageUrl: {
      type: String,
      required: false,
      default: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200',
    },
    features: {
      type: [String],
      default: [
        'Air Conditioned & Comfortable Seating',
        'Verified & Professional Drivers',
        'Real-time GPS Tracking',
        '24/7 Customer Support',
        'Sanitized Vehicles'
      ],
    },
    galleryImages: {
      type: [String],
      default: [
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200'
      ],
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.CabRoute || mongoose.model('CabRoute', CabRouteSchema);
