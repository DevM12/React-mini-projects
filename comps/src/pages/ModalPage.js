import Modal from '../components/Modal'
import { useState } from 'react';
import Button from '../components/Button'
export default function ModalPage() {
    const [openModal, setOpenModal] = useState(false)
    const handleClick = () => {
        setOpenModal(!openModal)
    }
    const actionBar = <div>
        <Button onClick={handleClick} danger rounded>Danger</Button>
    </div>
    const modal = <Modal closeModal={handleClick} actionBar={actionBar}>
        <p>Here is an important message</p>
    </Modal>
    return (
        <div className='realtive'>
            <Button primary onClick={handleClick} >MODAL</Button>
            {openModal && modal}            <div>The horned sungem (Heliactin bilophus) is a species of hummingbird native to much of central Brazil and parts of Bolivia and Suriname. It prefers open habitats such as savanna and grassland and readily occupies human-created habitats such as gardens. It recently expanded its range into southern Amazonas and Espírito Santo, probably as a result of deforestation; few other hummingbird species have recently expanded their range. The horned sungem is a small hummingbird with a long tail and a comparatively short, black bill. The sexes differ markedly in appearance, with males sporting two feather tufts ("horns") above the eyes that are shiny red, golden, and green. Males also have a shiny blue head crest and a black throat with a pointed "beard". The female is plainer and has a brown or yellow-buff throat. The species is the only one within its genus, Heliactin.

                The horned sungem is a nomadic species, moving between areas in response to the seasonal flowering of the plants on which it feeds. It relies on a broad variety of flowering plants for nectar. If the shape of the flower is incompatible with the bird's comparatively short bill, it may rob the nectar through a little hole at the base of the flower. The sungem does also consume small insects. Only the female builds the nest, incubates the eggs, and rears the chicks. She lays two white eggs in a small cup nest which are incubated for about 13 days. The chicks are naked and black after hatching, and can fly when 20 to 22 days old. The horned sungem has been reported to readily defend territories both against members of its own species and against subordinate hummingbird species. The species is currently classified as least concern by the International Union for Conservation of Nature, and its population is thought to be increasing.

                Taxonomy and systematics
                The horned sungem was named as Trochilus bilophus in 1820 by the Dutch zoologist Coenraad Jacob Temminck. This 1820 account only consisted of a figure plate illustrating a male specimen that was collected in 1816 by the German naturalist Prince Maximilian of Wied-Neuwied in Campos Gerais, Brazil. In the description of the new species that followed a few years later, Temminck and colleagues argued that the discovery of this species should be attributed to Wied-Neuwied, who was amongst the first travelers to bring specimens to Europe.[4][5] In 1821, Wied-Neuwied published his own description of the species, which he named T. cornutus,[6] but Temminck's name bilophus has priority as it was published one year earlier.[7] In 1831, the German zoologist Friedrich Boie classified the horned sungem within the new genus Heliactin, as Heliactin bilophus, together with three other hummingbird species. Today, the horned sungem is recognized as the only member of Heliactin.[8] In 1921, the French naturalist Eugène Simon mistakenly assumed that Temminck's figure plate was published in 1824 instead of in 1820, and consequently considered Wied-Neuwied's name cornutus as the valid one, which was followed in most subsequent publications of the 20th century. Even though this mistake was pointed out in 1999, some ornithologists felt that Temminck's name bilophus had become a nomen oblitum (forgotten name) and continued to use the established H. cornutus.[9][10] The specimen originally illustrated by Temminck in 1820, now considered as the type specimen of the species, is part of the collection of the Naturalis Biodiversity Center in Leiden.[5]

                The generic name Heliactin derives from the Greek words helios meaning 'sun' and aktin meaning 'sunbeam', while the specific epithet bilophus derives from the Latin bi meaning 'two, double' and the Greek lophos meaning 'crest'.[11] Bilophus, rather than bilopha or bilophum, is correct despite the mismatch between its apparently masculine ending and the feminine one of the genus.[10] "Horned sungem" is the official English common name designated by the International Ornithologists' Union (IOU).[8] The species is also known simply as the "sungem".[3]

                Within the Trochilidae (the hummingbird family), the horned sungem is a member of the subfamily Polytminae, which is also referred to as the "mangoes".[3] The Polytminae comprises 27 species in 12 genera and is thought to have originated around 18 million years ago. Genetic analyses show that this subfamily can be sub-divided into three groups: the Colibri-, Heliothryx-, and Anthracothorax-groups. The latter two groups are mostly found in tropical lowland, while the Colibri group is found in mountainous areas. The horned sungem belongs to the Heliothryx group, together with the tooth-billed hummingbird, the black-eared fairy, and the purple-crowned fairy.[12][13]
            </div>


        </div>
    );
}