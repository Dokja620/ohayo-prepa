import { component$ } from '@builder.io/qwik';

interface Message {
    message: string | undefined;
    status: string;
}

interface Props {
    message: Message;
    classText?: string;
}

export const Message = component$(({ message, classText}: Props) => {
  return (
    <>
        {message.message && (
            <div
                class={
                    classText + " message " +
                    (message.status === "error" && " error-message ") +
                    (message.status === "warning" && " warning-message ") +
                    (message.status === "notice" && " notice-message ") +
                    (message.status === "success" && " success-message ")
                }
            >
                {message.message}
            </div>
        )}
    </>
)
});