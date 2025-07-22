import { Item, List, PetsContainer, Title, Image, Text, Button } from "./Pets.styled"
import dog from './dog.jpg'

export const Pets = () => {
    return (
        <PetsContainer>
            <Title>Interacting with our pets</Title>
            <List>
                <Item>
                    <Image src={dog} alt="" />
                    <Text>Rescue pups pose as ghosts in festive photo shoot</Text>
                </Item>
                <Item>
                    <Image src={dog} alt="" />
                    <Text>Cat interrupts morning coffee on sunny Washington morning</Text>
                </Item>
                <Item>
                    <Image src={dog} alt="" />
                    <Text>New study finds dogs pay more attention to women</Text>
                </Item>
                <Item>
                    <Image src={dog} alt="" />
                    <Text>Petting dogs gives health benefit, even if they are not yours</Text>
                </Item>
            </List>
            <Button>See more</Button>
        </PetsContainer>
    )
}