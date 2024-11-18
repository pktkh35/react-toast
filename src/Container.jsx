import * as React from 'react';
import { useToastContainer } from "./hooks/useContainer";
import { Toast } from "./components/Toast";

const ToastContainer = () => {
    const { getToastToRender, updateHeightToast, calculateOffset } = useToastContainer({
        position: 'top-right',
        duration: 5000,
        role: 'alert',
        theme: 'light',
        limit: 15
    });

    return <div className="notify">
        {
            getToastToRender((position, toastList) => <div
                className={`athens-container athens-${position}`}
                key={`container-${position}`}
            >
                {
                    toastList.map((t) => ({ ...t, offset: calculateOffset(t) })).map((toastProps, i) => {
                        return <Toast
                            {...toastProps}
                            key={`toast-${toastProps.key}`}
                            updateHeightToast={updateHeightToast}
                        />
                    })
                }
            </div>
            )
        }
    </div>
}

export default ToastContainer