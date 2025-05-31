import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function CreatePostForm({ initialValues, onSubmit }) {
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(5, 'Judul minimal 5 karakter!')
      .required('Judul wajib diisi.'),
    postText: Yup.string()
      .min(5, 'Post minimal 5 karakter!')
      .required('Isi post wajib diisi.'),
  });

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Create New Post</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="space-y-4">
            <div>
              <label htmlFor="title" className="block font-medium">Title</label>
              <Field
                type="text"
                id="title"
                name="title"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring"
                placeholder="Contoh: Judul postingan"
              />
              <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label htmlFor="postText" className="block font-medium">Post</label>
              <Field
                as="textarea"
                id="postText"
                name="postText"
                rows="4"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring"
                placeholder="Tulis post kamu di sini..."
              />
              <ErrorMessage name="postText" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label htmlFor="image" className="block font-medium">Image</label>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={(e) => setFieldValue('image', e.currentTarget.files[0])}
                className="block w-full text-sm text-gray-600"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              {isSubmitting ? 'Creating...' : 'Create Post'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
