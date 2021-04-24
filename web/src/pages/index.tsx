import Layout from '@components/templates/Layout';
import React from 'react';
import { styled } from 'stitches';

const Text = styled('p', {
  fontFamily: '$system',
  variants: {
    size: {
      1: {
        fontSize: '$1',
      },
      2: {
        fontSize: '$2',
      },
      3: {
        fontSize: '$3',
      },
    },
  },
});

const IndexPage = () => {
  return (
    <Layout>
      <Text size="3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt orci eget condimentum blandit. Nulla
        nec nibh felis. Maecenas interdum molestie rutrum. Integer tincidunt accumsan tellus, in convallis nibh
        convallis sit amet. Donec id dictum dolor. Integer quis tempor ex, sed interdum nisl. Donec nulla nisi,
        scelerisque ac rhoncus non, aliquam fringilla ipsum. Phasellus bibendum nibh libero, id tempus arcu elementum
        et. Suspendisse placerat nisi vitae quam porta, non volutpat leo facilisis. Ut diam velit, pulvinar quis nisl
        non, placerat lacinia risus. In tempor, dui sit amet interdum pretium, est dolor feugiat dolor, id consequat
        felis mi at nunc. Aenean vitae odio vel ex vestibulum vulputate varius at tortor. Duis vehicula elit enim, non
        iaculis mauris hendrerit sit amet. Proin sit amet mattis ligula. In hac habitasse platea dictumst. Sed ut turpis
        ut mauris iaculis maximus. Vivamus rhoncus venenatis nibh eget varius. Cras vel molestie velit. Integer elit
        erat, sollicitudin at facilisis in, hendrerit nec metus. Aliquam in tempor metus. Sed a ullamcorper nunc. Mauris
        eu tristique magna. Sed pharetra orci non mollis consectetur. Fusce luctus efficitur fermentum. Aliquam non sem
        egestas nisl interdum pulvinar vitae quis lorem. Donec id convallis felis, commodo scelerisque mauris. Donec
        auctor ornare lorem eget dapibus. Cras scelerisque sem imperdiet mauris mollis ultricies. Vestibulum quis
        ultrices dui. Ut maximus eget est vel condimentum. Maecenas ut felis eget est ornare pretium non et justo. Fusce
        et auctor risus, sed consectetur diam. Donec vitae odio ac urna volutpat cursus sed ac elit. Maecenas varius
        ante at nibh molestie, in consectetur nibh volutpat. Vivamus a ornare nisi, ut tincidunt enim. Nunc eget nisl
        dignissim, faucibus lacus nec, feugiat lectus. Sed quis volutpat enim, eget venenatis neque. Duis maximus
        malesuada ante, nec convallis tortor. Cras ligula lorem, egestas a consequat quis, placerat id eros. Phasellus
        ullamcorper finibus risus, quis bibendum ligula ultrices vitae. Proin sit amet molestie dolor. Maecenas sit amet
        porttitor enim. Aliquam vitae laoreet mi. Quisque eget tristique arcu. Suspendisse tempus, quam eget aliquam
        tristique, ligula libero auctor augue, placerat tempus nunc quam sed nisl. Morbi dictum est vitae rhoncus
        fermentum. Maecenas lectus ex, efficitur ac leo et, tempor tincidunt lectus. Pellentesque vehicula sapien
        malesuada justo laoreet, sed luctus sem suscipit. Nunc consectetur ante nec molestie imperdiet. Cras tincidunt
        lacus justo. Nullam maximus pharetra rutrum. Vivamus placerat dui sed arcu tincidunt, eu fermentum justo
        tincidunt. Mauris eget blandit dui. Praesent elit nulla, venenatis nec interdum ut, laoreet in neque. Praesent
        vel vestibulum metus. Proin quis mi nec lacus pulvinar tempor a eu risus. Proin ornare mauris ut erat commodo
        porttitor. Donec id mattis velit. Nunc in suscipit nunc. Pellentesque quis iaculis risus, pharetra rhoncus enim.
        Phasellus pulvinar, orci at sollicitudin imperdiet, lacus sem venenatis enim, sed vehicula dui velit sit amet
        purus.
      </Text>
    </Layout>
  );
};

export default IndexPage;
