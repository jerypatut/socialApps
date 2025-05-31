import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { register } from '../service/AuthService';

function RegisterForm() {
  const initialValues = {
    username: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Username minimal 3 karakter')
      .max(15, 'Username maksimal 15 karakter')
      .required('Username wajib diisi'),
    password: Yup.string()
      .min(4, 'Password minimal 4 karakter')
      .max(20, 'Password maksimal 20 karakter')
      .required('Password wajib diisi'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password tidak sama')
      .required('Konfirmasi password wajib diisi'),
  });

  const onSubmit = async (data, { setSubmitting, resetForm }) => {
    try {
      await register({ username: data.username, password: data.password });
      alert('Registrasi berhasil!');
      resetForm();
    } catch (error) {
      console.error('Registration error:', error.response?.data || error.message);
      alert('Registrasi gagal. Coba lagi.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label htmlFor="username" className="block font-medium">Username</label>
              <Field
                name="username"
                type="text"
                placeholder="contoh.jeri"
                className="w-full px-3 py-2 border rounded-md"
              />
              <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label htmlFor="password" className="block font-medium">Password</label>
              <Field
                name="password"
                type="password"
                placeholder="Password..."
                className="w-full px-3 py-2 border rounded-md"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block font-medium">Confirm Password</label>
              <Field
                name="confirmPassword"
                type="password"
                placeholder="Ulangi Password..."
                className="w-full px-3 py-2 border rounded-md"
              />
              <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              {isSubmitting ? 'Mendaftarkan...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterForm;
