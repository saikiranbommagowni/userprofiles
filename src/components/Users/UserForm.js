import bs from "assets/globalStyles/bootstrap.module.css";
import styles from "components/Users/UserForm.module.css";
import { useHistory } from "react-router-dom";
import cx from "classnames";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

// import { useEffect, useState } from "react";

const validationSchema = yup.object({
  name: yup
    .string("Enter your name")
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required(),
  email: yup.string("Enter your email").email("Enter a valid email").required(),
  phone: yup.string("Enter your Phone Number").required(),
  website: yup.string("Enter Website").required(),

  //   street: props.user.address.street,
  //   suite: props.user.address.suite,
  //   city: props.user.address.city,
  //   zipcode: props.user.address.zipcode,
  //   geo: {
  //     lat: props.user.address.geo.lat,
  //     lng: props.user.address.geo.lng
  //   }
  // },
  // phone: props.user.phone,
  // website: props.user.website,
  // company: {
  //   name: props.user.company.name,
  //   catchPhrase: props.user.company.catchPhrase,
  //   bs: props.user.company.bs
  // }
});

const UserForm = (props) => {
  debugger;
  let history = useHistory();
  // const [userData,setUserData] = useState(props.user);
  let initialValues = {};
  if(props.user && Object.keys(props.user).length>0){
  initialValues = {
    id: props.user.id,
    name: props.user.name,
    username: props.user.username,
    email: props.user.email,
    address: {
      street: props.user.address.street,
      suite: props.user.address.suite,
      city: props.user.address.city,
      zipcode: props.user.address.zipcode,
      geo: {
        lat: props.user.address.geo.lat,
        lng: props.user.address.geo.lng,
      },
    },
    phone: props.user.phone,
    website: props.user.website,
    company: {
      name: props.user.company.name,
      catchPhrase: props.user.company.catchPhrase,
      bs: props.user.company.bs,
    },
  }
  }else{
    initialValues = {
      
        id: '',
        name: '',
        username: '',
        email: '',
        address: {
          street: '',
          suite: '',
          city: '',
          zipcode: '',
          geo: {
            lat: '',
            lng: '',
          },
        },
        phone: '',
        website: '',
        company: {
          name: '',
          catchPhrase: '',
          bs: '',
        }
    }
  }


  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      debugger;
      if(props.user && Object.keys(props.user).length>0){
        props.onUserModify(values);
      }else{
        props.onNewUser(values);
      }      
      history.push('/');
    },
  });

  return (
    <div className={cx(bs["container"])}>
      <div className={cx(styles.formDiv)}>
        <h4>{props.user?"Edit User":"Create New User"}</h4>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <Box mt={2} />
          <FormGroup>
            <Typography align="left">
              <FormLabel component="legend">Address:</FormLabel>
            </Typography>
            <TextField
              fullWidth
              id="address.suite"
              name="address.suite"
              label="Suite"
              value={formik.values.address.suite}
              onChange={formik.handleChange}
              // error={formik.touched.address.suite && Boolean(formik.errors.address.suite)}
              // helperText={formik.touched.address.suite && formik.errors.address.suite}
            />
            <TextField
              fullWidth
              id="address.city"
              name="address.city"
              label="City"
              value={formik.values.address.city}
              onChange={formik.handleChange}
              // error={formik.touched.address.city && Boolean(formik.errors.address.city)}
              // helperText={formik.touched.address.city && formik.errors.address.city}
            />
            <TextField
              fullWidth
              id="address.street"
              name="address.street"
              label="Street"
              value={formik.values.address.street}
              onChange={formik.handleChange}
              // error={formik.touched.address.street && Boolean(formik.errors.address.street)}
              // helperText={formik.touched.address.street && formik.errors.address.street}
            />
          </FormGroup>
          <TextField
            fullWidth
            id="phone"
            name="phone"
            label="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
          <TextField
            fullWidth
            id="website"
            name="website"
            label="website"
            value={formik.values.website}
            onChange={formik.handleChange}
            error={formik.touched.website && Boolean(formik.errors.website)}
            helperText={formik.touched.website && formik.errors.website}
          />
          <Box mt={2} />
          <Typography align="left">
            <FormLabel component="legend">Company:</FormLabel>
          </Typography>
          <TextField
            fullWidth
            id="company.name"
            name="company.name"
            label="Name"
            value={formik.values.company.name}
            onChange={formik.handleChange}
            // error={formik.touched.company.name && Boolean(formik.errors.company.name)}
            // helperText={formik.touched.company.name && formik.errors.company.name}
          />
          <TextField
            fullWidth
            id="company.catchPhrase"
            name="company.catchPhrase"
            label="Catch Phrase"
            value={formik.values.company.catchPhrase}
            onChange={formik.handleChange}
            // error={formik.touched.company.catchPhrase && Boolean(formik.errors.company.catchPhrase)}
            // helperText={formik.touched.company.catchPhrase && formik.errors.company.catchPhrase}
          />
          <Box mt={4} />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
