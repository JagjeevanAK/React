import { useOnline } from "../hooks/useOnline";

export default function StatusBanner() {
    const isOnline = useOnline();

    return (
        <div>
            {isOnline ? (
                <p style={{ color: "green" }}>🟢 You are online</p>
            ) : (
                <p style={{ color: "red" }}>🔴 You are offline</p>
            )}
        </div>
    );
}
