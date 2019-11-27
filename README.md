# Bizzabo Website Sections

The purpose of this project is to create new themes for Bizzabo website sections.

**Please create a branch with your name and work on that branch. Once done, open a PR to master.**

In `src` folder you will find a file called `Section.js`.  
This file is a template component for the new section theme.  
The task is the implement this component.
Inside the `props` object you'll find the relevant data for your section. Please find below section-specific instructions for your your development process.
Inside the `Section.d.ts` file you can find TypeScript interfaces that describe the data structure for the section.

You can find an example in the `examples` folder.  
It contains a real sections that you can take inspiration from.  
You can use the css classes that are used in the example sections, but it's not a must.  
Please don't edit any other file other then your duplicated `Section.js` file.

### Few important points
- css should be implemented using `react-jss` module.  
classes must be static so use the syntax bellow.
In this way, we can still control over the classes in the markup.  
https://cssinjs.org/jss-plugin-nested?v=v10.0.0
```
const styles = {
  container: {
    padding: 20,
    '&:hover': {
      background: 'blue'
    },
    // Add a global .clear class to the container.
    '&.clear': {
      clear: 'both'
    },
    // Reference a global .button scoped to the container.
    '& .button': {
      background: 'red'
    },
    // Use multiple container refs in one selector
    '&.selected, &.active': {
      border: '1px solid red'
    }
  }
}
```
- `!important` is not allowed.
- use bootstrap grid and layout classes for positioning.   
For example:
    - Grid classes: col-${size}-${width}  
    For example: `col-xs-12` to span the block on 100% width. 
    All the available options are in the `bootstrap` docs.
    options are: 
        - size: `xs`, `sm`, `md`, `lg`,
        - width: `x between 1-12`. where x is (100 / (12/x) )% of the container.
    - `padding / margin` classes: ${type}-${direction}-${size}.  
    For example: `padding-left-small`.  
    options are: 
        - type: `margin`/`padding`
        - direction: `left`, `right`, `bottom`, `top`, `horizontal`, `vertical`,
        - size: `small`, `medium`, `large`


## Important classes
There are several important classes that must to be included in the section markup:
- `atom-sectionMain rowHolder` should be on the top level wrapper of the section  
- `main-app-container custom-space-top custom-space-bottom` another wrapper between the elements and the `rowHolder` wrapper
- `element-${element.id}` should wrap every element in the section. (for example in the `people` section, `header` and `people` elements).
- Find another important classes that are section-specific.

## Section-specific instruction
### People
A mock for the new `people` section can be found here:
https://projects.invisionapp.com/share/CYUO0Z0MB5G#/screens/391670499_4inRow-1_Copy_6

The number of contacts to show in each view size:
- Web view - show up to 4 contacts in a row.
- Ipad view - show up to 3 contacts in a row.
- Mobile view - show up to 1 contacts in a row.

Contacts should be aligned to the center.

Inside the section prop, you will find all the relevant data for the `people` section.
`people` section elements are `people` and `header`.  
 
 **NOTE:** The naming is a little bit confusing. `people` **section** contains two elements: `people` **element** and `header` **element**  

 If `people` element contains `contactListId` prop, show the contacts, overwise, show the placeholder.  

 In the `people` element you will find the contacts array.  
 Each `contact` can be a speaker and than he will have a `speakerId` prop. In this case, the contact img should be wrapper with an A tag.  

If the `contact` doesn't have image url (`thumbnailUrl`), show the placeholder instead.  

When hovering over a contact image, there is a zoom effect. You can see it in the mock when hovering the 2nd image from right on the top row.
Please animate this effect (we can't mock animation in inVision)

In the `people` example section, you can find an example of all the use cases described above.

**Important classes**
- `atom-main` should be on the header text of the section
- `atom-1` should be on the contact name
- `atom-2` should be on the contact title
- `atom-3` should be on the contact company

### Header
general specs for each of the header themes:

when rendering the name of the registerButton check: if it's a custom name, show the custom name else show the selected name. `(registerButton.name === 'custom' ? registerButton.customName : registerButton.name})`

link to mockups: https://invis.io/UATNTNOWNVZ#/395126714_HeaderThemeWebHalf_Copy

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
