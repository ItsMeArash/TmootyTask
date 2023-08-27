import { Formik, Form, Field } from 'formik';
import { Button, Container, MenuItem } from '@mui/material';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { FormValues } from '@/types';

const initialValues = {
  slug: '',
  title: '',
  content: '',
  category: '',
  publisherName: '',
};

const PostForm = () => {
  const handleSubmit = (values: FormValues) => {
    console.log('Form submitted with values:', values);
  };

  return (
    <Container maxWidth="sm">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <Field
              as={TextField}
              name="slug"
              label="Slug"
              fullWidth
              margin="normal"
            />
            <Field
              as={TextField}
              name="title"
              label="Title"
              fullWidth
              margin="normal"
            />
            
            <Field
              as={Select}
              name="category"
              label="Category"
              fullWidth
              margin="normal"
            >
              <MenuItem value="">Select Category</MenuItem>
              <MenuItem value="category1">Category 1</MenuItem>
              <MenuItem value="category2">Category 2</MenuItem>
              <MenuItem value="category3">Category 3</MenuItem>
            </Field>
            <Field
              as={TextField}
              name="publisherName"
              label="Publisher Name"
              fullWidth
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<CloudUploadIcon />}
            >
              Send Post
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default PostForm;
