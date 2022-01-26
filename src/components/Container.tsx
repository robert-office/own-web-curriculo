interface ContainerProps {
    children?: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <section className="w-full lg:max-w-7xl lg:px-8 xl:px-5 mx-auto">
            { children }
        </section>
    );
}