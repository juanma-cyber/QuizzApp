import { Avatar, Box, chakra, Flex, Icon, SimpleGrid, useColorModeValue, } from '@chakra-ui/react';

const testimonials = [
    {
        name: 'Juan',
        role: 'Fronted Web Developer',
        content:
            'This quiz web app is built using React JS.',
        avatar:
            'data:image/jpeg;base64,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',
    }
];


function TestimonialCard(props) {
    const { name, role, content, avatar } = props;
    return (
        <Flex
            boxShadow={'lg'}
            maxW={'640px'}
            direction={{ base: 'column-reverse', md: 'row' }}
            width={'full'}
            rounded={'xl'}
            p={10}
            justifyContent={'space-between'}
            position={'relative'}
            bg={useColorModeValue('white', 'gray.800')}
            _after={{
                content: '""',
                position: 'absolute',
                height: '21px',
                width: '29px',
                left: '35px',
                top: '-10px',
                backgroundSize: 'cover',
                backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%239F7AEA'/%3E%3C/svg%3E")`,
            }}
            _before={{
                content: '""',
                position: 'absolute',
                zIndex: '-1',
                height: 'full',
                maxW: '640px',
                width: 'full',
                filter: 'blur(40px)',
                transform: 'scale(0.98)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                top: 0,
                left: 0,
            }}>
            <Flex
                direction={'column'}
                textAlign={'left'}
                justifyContent={'space-between'}>
                <chakra.p
                    color={'gray.700'}
                    fontFamily={'Inter'}
                    fontWeight={'medium'}
                    fontSize={'15px'}
                    pb={4}>
                    {content}
                </chakra.p>
                <chakra.p fontFamily={'Work Sans'} color={'gray.700'} fontWeight={'bold'} fontSize={14}>
                    {name}
                    <chakra.span
                        fontFamily={'Inter'}
                        fontWeight={'medium'}
                        color={'gray.500'}>
                        {' '}
                        - {role}
                    </chakra.span>
                </chakra.p>
            </Flex>
            <Avatar
                src={avatar}
                height={'80px'}
                width={'80px'}
                alignSelf={'center'}
                m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
            />
        </Flex>
    );
}

export default function About() {
    return (
        <Flex
            textAlign={'center'}
            pt={10}
            justifyContent={'center'}
            direction={'column'}
            width={'full'}>
            <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
                <chakra.h3
                    fontFamily={'Work Sans'}
                    fontWeight={'bold'}
                    fontSize={20}
                    textTransform={'uppercase'}
                    color={'purple.400'}>
                    People love us
                </chakra.h3>
                <chakra.h1
                    py={5}
                    fontSize={48}
                    fontFamily={'Work Sans'}
                    fontWeight={'bold'}
                    color={useColorModeValue('gray.300', 'gray.50')}>
                    Quiz Web App
                </chakra.h1>
                <chakra.h2
                    margin={'auto'}
                    width={'70%'}
                    fontFamily={'Inter'}
                    fontWeight={'medium'}
                    color={useColorModeValue('gray.500', 'gray.400')}>
                    Test Your Knowledge with Fun Quizzes on Our Exciting Website!
                </chakra.h2>
            </Box>
            <SimpleGrid
                columns={{ base: 1, xl: 1 }}
                spacing={'20'}
                mt={16}
                mx={'auto'}>
                {testimonials.map((cardInfo, index) => (
                    <TestimonialCard {...cardInfo} key={index} index={index} />
                ))}
            </SimpleGrid>
            <Box>
                <Icon viewBox="0 0 40 35" mt={14} boxSize={10} color={'purple.400'}>
                    <path
                        fill={'currentColor'}
                        d="M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z"
                    />
                </Icon>
            </Box>
        </Flex>
    );
}