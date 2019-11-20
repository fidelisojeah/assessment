import React from 'react';
import { render } from 'react-dom';

import { ThemeProvider } from 'styled-components';

import { theme, GlobalTheme } from '<utils>';

import Widget from '<containers>/Widget';

// import { ReactComponent as Location } from '<assets>/location.svg';

// function FormInput() {
//     return (
//         <Form onSubmit={() => console.log('HERE')}>
//             <DateInput />
//             {/* <Input
//                 type="search"
//                 name="location"
//                 placeholder="Your Location"
//                 dropdownChildren={[
//                     { code: 'YTO', airport: 'Toronto Airports, All' },
//                     { code: 'LOS', airport: 'Murtala International Airport' }
//                 ]}
//                 prefix={<Location />}
//             /> */}
//         </Form>
//     );
// }

const toRender = (
    <ThemeProvider theme={theme}>
        <>
            <GlobalTheme />
            <Widget />
        </>
    </ThemeProvider>
);

const rootElement = document.getElementById('root');

render(toRender, rootElement);
