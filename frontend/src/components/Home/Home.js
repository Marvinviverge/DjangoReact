import React from 'react'
import { CpuChipIcon, ArrowRightEndOnRectangleIcon, ChatBubbleBottomCenterTextIcon, HomeIcon } from '@heroicons/react/24/outline'

const features = [

    {
        name: 'Inscription Rapide, Connexion Instantanée',
        description:
            "Rejoignez notre communauté en quelques clics. L'inscription est rapide et sans tracas, offrant un accès immédiat à un écosystème de développeurs passionnés.",
        icon: ArrowRightEndOnRectangleIcon,
    },
    {
        name: 'Dashboard Intuitif, Données en Temps Réel',
        description:
            "Explorez votre espace dédié grâce à un tableau de bord intuitif. Accédez à des données en temps réel, des statistiques de performance, et surveillez vos projets en toute simplicité.",
        icon: HomeIcon,
    },
    {
        name: 'Messagerie Instantanée Intégrée',
        description:
            "Communiquez instantanément avec vos collègues développeurs. Notre boîte de réception vous permet d'échanger des idées, des conseils, et de rester connecté avec la communauté DevNet où que vous soyez.",
        icon: ChatBubbleBottomCenterTextIcon,
    },
    {
        name: 'Fonctionnalités Avancées pour Développeurs Exigeants',
        description:
            "En plus de nos fonctionnalités de base, explorez un ensemble complet d'outils de développement pour amener vos projets à de nouveaux sommets. Des API puissantes, des intégrations flexibles, et des fonctionnalités avancées pour des développements plus efficaces.",
        icon: CpuChipIcon,
    },
]

export default function Home() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-red-600">Bienvenue sur DevNet</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Connecter les esprits, développer l'avenir.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Découvrez la puissance de la connectivité et de la collaboration au cœur du développement web. DevNet vous ouvre les portes d'un univers où l'innovation rencontre la communauté, où chaque ligne de code compte.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}