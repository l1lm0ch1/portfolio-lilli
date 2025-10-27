const Button = ({ label, onClick }: { label: string; onClick: () => void }) => (
    <button
        onClick={onClick}
        style={{
            backgroundColor: 'red',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
        }}
    >
        {label}
    </button>
);

export default Button;
