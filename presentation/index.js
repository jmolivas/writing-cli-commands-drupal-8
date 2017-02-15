// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  jmolivas_big: require("../assets/images/jmolivas-big.jpg"),
  weknow_box: require("../assets/images/weknow-logo-box.png"),
};

preloader(images);

const theme = createTheme({
  primary: '#0F2842',
  quartenary: '#122b45',
  green: '#022832'
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide", "fade"]} transitionDuration={500} progress="none">
          <Slide transition={["slide", "fade"]} bgColor="primary">
            <Heading size={1} fit lineHeight={2}>
              Writing CLI Commands <br/> for Drupal 8
            </Heading>
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="white">
            <Heading size={1} lineHeight={1} textColor="primary">
              About me
            </Heading>
            <br/>
            <Layout>
              <Fill>
                <Heading size={5} textColor="primary" bgColor="white" margin={10}>
                  <Image src={images.jmolivas_big.replace("/", "")}/><br/>
                  @jmolivas
                </Heading>
              </Fill>
              <Fill>
                <Heading size={5} textColor="primary" bgColor="white" margin={10}>
                  <Image src={images.weknow_box.replace("/", "")}/><br/>
                  @weKnowInc
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="white">
              Drupal Console
            </Heading>
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="white">
            <Heading size={1} lineHeight={1} textColor="primary">
              Drupal Console must
            </Heading>
            <Heading size={1} lineHeight={1} textColor="primary">
              be installed per site
            </Heading>
            <br/>
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="green">
            <Heading size={1} fit lineHeight={1} textColor="white">
              Download as new dependency
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/slides/install-composer.bash")}
            />
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="green">
            <Heading size={1} fit lineHeight={1} textColor="white">
              Download using DrupalComposer
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/slides/install-drupal-composer.bash")}
            />
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="green">
            <Heading size={1} fit lineHeight={1} textColor="white">
              Running Drupal Console
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/slides/running.bash")}
            />
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="white">
              Install Launcher
            </Heading>
          </Slide>

          <CodeSlide
                transition={["slide", "fade", "zoom"]}
                lang="bash"
                code={require("raw!../assets/slides/install.bash")}
                ranges={[
                  { loc: [0, 1], title: 'Launcher aka global executable' },
                  { loc: [1, 3], note: 'Download latest project version'},
                  { loc: [4, 5], note: 'Move file to a global accesible path' },
                  { loc: [6, 7], note: 'Apply executable permissions' },
                  { loc: [8, 9], note: 'Copy configuration files' },
                ]}>
          </CodeSlide>

          <Slide transition={["slide", "fade"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="white">
              Command LifeCycle
            </Heading>
            <br/>
            <Heading size={4} lineHeight={1} textColor="white">
              Commands have three lifecycle methods.
            </Heading>
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="white">
              The initialize method (optional)
            </Heading>
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="white">
              The interact method (optional)
            </Heading>
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="white">
              The execute method (required)
            </Heading>
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="white">
              Commands on extensions
            </Heading>
            <br/>
            <Heading size={3} fit lineHeight={1} textColor="white">
              Modules, Themes and Others?
            </Heading>
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="green">
            <Heading size={2} lineHeight={1} textColor="white">
            generate:module
            </Heading>
            <hr/>
            <br/>
            <CodePane
              lang="bash"
              source={require("raw!../assets/slides/drupal-generate-module.bash")}
            />
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="green">
            <Heading size={2} lineHeight={1} textColor="white">
            generate:command
            </Heading>
            <hr/>
            <br/>
            <CodePane
              lang="bash"
              source={require("raw!../assets/slides/drupal-generate-command.bash")}
            />
          </Slide>

          <CodeSlide
                transition={["slide", "fade", "zoom"]}
                lang="bash"
                code={require("raw!../assets/slides/services.code")}
                ranges={[
                  { loc: [0, 1], title: 'console.services.yml' },
                  { loc: [1, 2], note: 'Service name.' },
                  { loc: [2, 3], note: 'Service class.' },
                  { loc: [3, 4], note: 'Service injected argument(s).' },
                  { loc: [4, 6], note: 'Service tag.' },
                ]}>
          </CodeSlide>

          <CodeSlide
                transition={["slide", "fade", "zoom"]}
                lang="php"
                code={require("raw!../assets/slides/drupal-command.code")}
                ranges={[
                  { loc: [0, 1], title: 'src/Command/DefaultCommand.php' },
                  { loc: [2, 3], note: 'Class namespace.' },
                  { loc: [4, 11], note: 'Use keywords' },
                  { loc: [17, 21], note: 'Command annotation' },
                  { loc: [22, 23], note: 'Class extend Command' },
                  { loc: [24, 25], note: 'use CommandTrait' },
                  { loc: [26, 32], note: 'Define protected property' },
                  { loc: [36, 42], note: 'Inject property via costructor' },
                  { loc: [45, 50], note: 'Configure command' },
                  { loc: [54, 62], note: 'Execute command' },
                ]}>
          </CodeSlide>

          <Slide transition={["slide", "fade"]} bgColor="green">
            <Heading size={2} lineHeight={1} textColor="white">
            Add option
            </Heading>
            <br/>
            <CodePane
              lang="php php-big"
              source={require("raw!../assets/slides/add-option.code")}
            />
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="green">
            <Heading size={2} lineHeight={1} textColor="white">
            Update execute
            </Heading>
            <br/>
            <CodePane
              lang="php php-big"
              source={require("raw!../assets/slides/update-execute.code")}
            />
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="green">
            <Heading size={2} lineHeight={1} textColor="white">
            Add interact
            </Heading>
            <br/>
            <CodePane
              lang="php php-big"
              source={require("raw!../assets/slides/add-interact.code")}
            />
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="white">
              Commands on standard
            </Heading>
            <Heading size={1} fit lineHeight={1} textColor="white">
              php packages/libraries
            </Heading>
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="green">
            <Heading size={2} lineHeight={1} textColor="white">
            composer.json
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/slides/extend-composer.code")}
            />
            <br/>
            <Heading size={5} textColor="white">
              Composer package type must be declared as drupal-console-library.
            </Heading>
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="green">
            <Heading size={2} lineHeight={1} textColor="white">
            console.services.yml
            </Heading>
            <CodePane
              lang="php php-big"
              source={require("raw!../assets/slides/extend-services.code")}
            />
            <br/>
            <Heading size={5} textColor="white">
              Service must be tagged as drupal.command
            </Heading>
            <Heading size={5} textColor="white">
              and optionally use atribute
            </Heading>
            <Heading size={5} textColor="white">
             bootstrap: uninstall
            </Heading>
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="green">
            <Heading size={2} lineHeight={1} textColor="white">
            Require package
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/slides/require-console-extend-example-site.bash")}
            />
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="white">
              Global commands
            </Heading>
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="green">
            <Heading size={2} lineHeight={1} textColor="white">
            Create project
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/slides/create-project-console-extend.bash")}
            />
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="green">
            <Heading size={2} lineHeight={1} textColor="white">
            Require package
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/slides/require-console-extend-example-global.bash")}
            />
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="green">
            <Heading size={2} lineHeight={1} textColor="white">
            Fork project
            </Heading>
            <br/>
            <Link href="https://github.com/hechoendrupal/drupal-console-extend-example">
              <Heading size={4} textColor="white">https://github.com/hechoendrupal/drupal-console-extend-example</Heading>
            </Link>
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="white">
              chain command
            </Heading>
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="primary">
            <Heading size={4} lineHeight={1} textColor="white">
              Read YAML file containing commands
            </Heading>
            <br/>
            <Heading size={4} lineHeight={1} textColor="white">
              Define placeholders
            </Heading>
            <br/>
            <Heading size={4} lineHeight={1} textColor="white">
              Read ENV variables
            </Heading>
            <br/>
            <Heading size={4} lineHeight={1} textColor="white">
              Register as command
            </Heading>
          </Slide>

          <CodeSlide
               transition={["slide", "fade", "zoom"]}
               lang="php"
               code={require("raw!../assets/slides/chain-create-data.code")}
               ranges={[
                 { loc: [0, 1], title: '~/.console/chain/create-data.yml' },
                 { loc: [2, 5], note: 'Create users' },
                 { loc: [5, 9], note: 'Create vocabularies' },
                 { loc: [9, 10], note: 'Create terms' },
                 { loc: [10, 13], note: 'Create nodes' },
               ]}>
          </CodeSlide>

          <Slide transition={["slide", "fade"]} bgColor="green">
            <Heading size={2} lineHeight={1} textColor="white">
            Execute chain
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/slides/chain-create-data.bash")}
            />
          </Slide>

          <CodeSlide
               transition={["slide", "fade", "zoom"]}
               lang="php"
               code={require("raw!../assets/slides/chain-placeholder.code")}
               ranges={[
                 { loc: [0, 1], title: 'Define placeholders' },
                 { loc: [5, 11], note: 'Placeholders can have defaults' },
               ]}>
          </CodeSlide>

          <CodeSlide
               transition={["slide", "fade", "zoom"]}
               lang="php"
               code={require("raw!../assets/slides/chain-env.code")}
               ranges={[
                 { loc: [0, 1], title: 'Read ENV variables' },
                 { loc: [5, 11], note: 'ENV variables must be set in advanced' },
               ]}>
          </CodeSlide>

          <CodeSlide
               transition={["slide", "fade", "zoom"]}
               lang="php"
               code={require("raw!../assets/slides/chain-register-command.code")}
               ranges={[
                 { loc: [0, 1], title: 'Register as command' },
                 { loc: [1, 3], note: 'Define name and description' },
               ]}>
          </CodeSlide>

          <Slide transition={["slide", "fade"]} bgColor="green">
            <Heading size={2} lineHeight={1} textColor="white">
            Execute chain as command
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/slides/chain-register-command.bash")}
            />
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="white">
              Core Commands
            </Heading>
            <br/>
            <br/>
            <Link href="https://github.com/hechoendrupal/DrupalConsole/blob/master/src/Command/Develop/ExampleCommand.php">
              <Heading size={4} textColor="white">ExampleCommand.php</Heading>
            </Link>
            <br/>
            <Link href="https://github.com/hechoendrupal/DrupalConsole/blob/master/src/Command/Develop/ExampleContainerAwareCommand.php">
              <Heading size={4} textColor="white">ExampleContainerAwareCommand.php</Heading>
            </Link>
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="white">
              Symfony Application.
            </Heading>
            <br/><br/>
            <Link href="http://www.php-fig.org/psr/psr-2/">
              <Heading size={4} fit textColor="white">Project code is PSR-2 Coding Style.</Heading>
            </Link>
          </Slide>

          <Slide transition={["slide", "fade"]} bgColor="primary">
            <Heading size={3} lineHeight={1} textColor="white">
              Questions & Feedback
            </Heading>
            <hr/>
            <br/>
            <Heading size={3} lineHeight={1.5} textColor="white">
              @jmolivas <br/> @weKnowInc <br/> @drupalconsole
            </Heading>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
